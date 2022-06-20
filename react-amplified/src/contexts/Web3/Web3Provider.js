import { useContext, useEffect, useState } from 'react';
import Web3Context from './Web3Context';
import { Web3Client } from '../../web3'
import { rpcUrls, defaultChainId } from '../../config';
import Web3ModalContext from '../Web3Modal/Web3ModalContext';

const Web3Provider = ( props ) => {
  const { chainId } = useContext(Web3ModalContext);
  const [web3, setWeb3] = useState();

  useEffect(() => {
    let _chainId = ( chainId == null? defaultChainId : chainId );
    console.log(_chainId);

    const newWeb3 = new Web3Client(rpcUrls[_chainId], {});
    setWeb3(newWeb3);
  }, []);

  return <Web3Context.Provider value={{ web3 }}>{ props.children }</Web3Context.Provider>;
};

export default Web3Provider;

