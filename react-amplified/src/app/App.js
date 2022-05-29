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
    const listener = Hub.listen("datastore", async hubData => {
      const {event, data} = hubData.payload;
      console.log('GOT DATASTORE EVENT', event);
      if (event === "ready") {
        console.log('DATASTORE IS READY');
        setReady(true);
      }
    })

    return () => {
      subscription.unsubscribe();
      listener();
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
