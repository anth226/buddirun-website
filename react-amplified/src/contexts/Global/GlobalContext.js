import { createContext } from 'react';

const GlobalContext = createContext({
  BuddiPrice: null,
  tokenHolders: 0,
  totalSupply: 0,
  marketCap: 0,
});

export default GlobalContext;


