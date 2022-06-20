import { createContext } from 'react';

const NavigationContext = createContext({
  drawerOpen: false,
  toggleDrawerOpen: () => {},
});

export default NavigationContext;

