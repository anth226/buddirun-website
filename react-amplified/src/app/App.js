import React, { useEffect, useState, createContext } from "react";
import "../assets/style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { DataStore, Hub, Predicates } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import { DatastoreReadyContext } from "./DatastoreReadyContext";
import { User } from "../models";
import { getUserInfo, getProfile, updateProfile } from "./Backend";

function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const subscription = DataStore.observe(User).subscribe((msg) => {
      console.log('GOT USER MODEL', msg.model, msg.opType, msg.element);
    });
    const datastoreListener = Hub.listen("datastore", async hubData => {
      const {event, data} = hubData.payload;
      if (event === "ready") {
        // console.log('DATASTORE IS READY');
        setReady(true);
      }
    });
    const authListener = Hub.listen("auth", async hubData => {
      const {event, data} = hubData.payload;
      switch (event) {
        case "signUp":
        case "signIn":
          // console.log('USER IS SIGNED IN');
          // Get profile and update backend with user data if it changed
          const userAttributes = await getUserInfo(),
                profile = await getProfile(),
                userData = {},
                propertyMap = {
                  'given_name': 'first_name',
                  'family_name': 'last_name',
                  'email': 'email',
                };
          for (let attrKey in userAttributes) {
            const attrVal = userAttributes[attrKey],
                  profileKey = propertyMap[attrKey];
            if (profileKey != null && attrVal != profile[profileKey]) {
              userData[profileKey] = attrVal;
            }
          }
          if (Object.keys(userData).length > 0) {
            await updateProfile(userData);
          }
          // TODO: Close auth navbar
          break;
        case "signOut":
          // console.log('USER IS SIGNED OUT');
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
    <DatastoreReadyContext.Provider value={isReady}>
      <Authenticator.Provider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Authenticator.Provider>
    </DatastoreReadyContext.Provider>
  );
}

export default App;
