import { useContext, createContext } from "react";

export const DatastoreStatus = {
  "INIT": 1,
  "READY": 2,
  "LOGGED_IN": 3,
};

export const DatastoreContext = createContext(0);

export function useDatastoreContext() {
  return useContext(DatastoreContext);
}
