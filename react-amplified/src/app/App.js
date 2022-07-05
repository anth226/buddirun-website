import React, { useEffect, useState, createContext } from "react";
import "../assets/style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {Auth, DataStore, Hub} from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import { User } from "../models";
import { updateAuth } from "./Auth";
import AppUser from "../appModels/AppUser";
import { DatastoreContext, DatastoreStatus } from "../lib/contextLib";

function App() {
  const [datastoreStatus, setDatastoreStatus] = useState(DatastoreStatus.INIT);

  useEffect(() => {
    let userSubscription;
    // TODO: Optimize the check for logged in User is order to start Datastore
    Auth.currentSession()
      .then((session) => {
        console.log('TEST SESSION', session, datastoreStatus);
        if (datastoreStatus < DatastoreStatus.READY) {
          DataStore.start();
        }
      })
      .catch((sessionErr) => {
        console.warn('Failed getting session', sessionErr);
      })
    const datastoreListener = Hub.listen("datastore", async hubData => {
      const {event, data} = hubData.payload;
      if (event === "ready") {
        setDatastoreStatus(DatastoreStatus.READY);
        const loggedIn = await updateAuth();
        if (loggedIn) {
          setDatastoreStatus(DatastoreStatus.LOGGED_IN);
          if (!userSubscription) {
            userSubscription = DataStore.observe(User).subscribe((msg) => {
              // console.log('GOT USER MODEL', msg.model, msg.opType, msg.element);
            });
          }
        }
      }
    });
    const authListener = Hub.listen("auth", async hubData => {
      const {event, data} = hubData.payload;
      switch (event) {
        case "signUp":
        case "signIn":
          // console.log('USER IS SIGNED IN');
          // Get profile and update backend with user data if it changed
          const loggedIn = await updateAuth();
          if (loggedIn) {
            setDatastoreStatus(DatastoreStatus.LOGGED_IN);
            DataStore.start();
            if (!userSubscription) {
              userSubscription = DataStore.observe(User).subscribe((msg) => {
                // console.log('GOT USER MODEL', msg.model, msg.opType, msg.element);
              });
            }
          }
          break;
        case "signOut":
          // TODO:  Make sure this is running as expected,
          //        the app seems to force navigation after signout skipping the AppUser.destroy().
          //        According to the Datastore READY event, everything seems to be working as expected.
          // console.log('USER IS SIGNED OUT');
          AppUser.destroy();
          break;
        case "configured":
          // NOTE: `configured` event is never triggered in Auth
          // console.log('AUTH IS CONFIGURED');
          break;
      }
      // TODO: How should we handle the following
      // - 'signIn_failure'
      // - 'tokenRefresh'
      // - 'tokenRefresh_failure'
    });

    return () => {
      if (userSubscription) {
        userSubscription.unsubscribe(); // SEARCH: subscription = DataStore.observe
      }
      datastoreListener();
      authListener();
    }
  }, [setDatastoreStatus]);

  return (
    <Authenticator.Provider>
      <DatastoreContext.Provider value={datastoreStatus}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </DatastoreContext.Provider>
    </Authenticator.Provider>
  );
}

export default App;
