import { useState } from 'react';
import NavigationContext from './NavigationContext';

const NavigationContextProvider = ( props ) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return <NavigationContext.Provider value={{ drawerOpen, toggleDrawerOpen }}>{ props.children }</NavigationContext.Provider>;
};

export default NavigationContextProvider;
