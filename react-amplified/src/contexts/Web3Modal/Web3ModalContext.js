import { createContext } from 'react';

const Web3ModalContext = createContext({
  web3: null,
  connect: () => {},
  disconnect: () => {},
  account: null,
  chainId: null,
  networkId: null,
  connected: false
});

export default Web3ModalContext;