import { useState } from 'react';
import AmplifyContext from './AmplifyContext';

const AmplifyContextProvider = ( props ) => {
  const [datastoreStatus, setDatastoreStatus] = useState(true);

  const updateDatastoreStatus = (status) => {
    console.log('UPDATING DATASTORE STATUS', status);
    setDatastoreStatus(status);
  }

  return <AmplifyContext.Provider value={{ datastoreStatus, updateDatastoreStatus }}>{ props.children }</AmplifyContext.Provider>;
};

export default AmplifyContextProvider;
