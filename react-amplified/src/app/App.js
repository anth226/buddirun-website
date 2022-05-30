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
          console.log('USER IS SIGNED IN');
          // do call to backend
          break;
        case "signOut":
          console.log('USER IS SIGNED OUT');
          // do call to backend
          break;
        case "configured":
          console.log('AUTH IS CONFIGURED');
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
