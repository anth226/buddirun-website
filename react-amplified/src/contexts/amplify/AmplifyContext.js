import { createContext } from 'react';

export const DatastoreStatus = {
  "INIT": 1,
  "READY": 2,
  "LOGGED_IN": 3,
};

const AmplifyContext = createContext({
  datastoreStatus: 0,
  updateDatastoreStatus: () => {}
});

export default AmplifyContext;

