import React, { useEffect, useState, createContext } from "react";
import "../assets/style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { DataStore, Hub } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import { DatastoreReadyContext } from "./DatastoreReadyContext";
import { YamProvider, Web3Provider, Web3ModalProvider, NavigationContextProvider } from '../contexts';
import { User } from "../models";
import { updateAuth } from "./Auth";
import AppUser from "../appModels/AppUser";
import { DatastoreContext, DatastoreStatus } from "../lib/contextLib";

function App() {
  const [datastoreStatus, setDatastoreStatus] = useState(DatastoreStatus.INIT);

  useEffect(() => {
    const subscription = DataStore.observe(User).subscribe((msg) => {
      console.log('GOT USER MODEL', msg.model, msg.opType, msg.element);
    });
    const datastoreListener = Hub.listen("datastore", async hubData => {
      const {event, data} = hubData.payload;
      if (event === "ready") {
        setDatastoreStatus(DatastoreStatus.READY);
        const loggedIn = await updateAuth();
        if (loggedIn) {
          setDatastoreStatus(DatastoreStatus.LOGGED_IN);
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
      subscription.unsubscribe();
      datastoreListener();
      authListener();
    }
  }, []);

  return (
    <Web3ModalProvider>
      <YamProvider>
        <Web3Provider>
            <NavigationContextProvider>
              <DatastoreReadyContext.Provider value={isReady}>
                <Authenticator.Provider>
                  <BrowserRouter>
                    <AppRoutes />
                  </BrowserRouter>
                </Authenticator.Provider>
              </DatastoreReadyContext.Provider>
            </NavigationContextProvider>
        </Web3Provider>
      </YamProvider>
    </Web3ModalProvider>
  );
}

export default App;
