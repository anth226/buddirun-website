import { useEffect, useState } from 'react';
// import GlobalContext from './GlobalContext';
// import { useCoingecko } from '../../hooks';
// import { useMoralis } from 'react-moralis';
import { Buddi_ADDRESS, Buddi_GENESIS_BLOCK, MORALIS_SERVER_URL, MORALIS_APP_ID } from '../../config';

const GlobalContextProvider = ( props ) => {
  // const { fetchCoinData } = useCoingecko();
  const { Moralis } = useMoralis();
  const [BuddiPrice, setBuddiPrice] = useState(null);
  const [tokenHolders, setTokenHolders] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [repeater,setRepeater]=useState(0);
  
  useEffect(() => {
    // async function getCoinData() {  
    //   // const Buddiland = await fetchCoinData('Buddiland-token');
    //   console.log(Buddiland);
    //   setBuddiPrice(Buddiland.usdPrice.toFixed(10));
    //   setTotalSupply(1000000000);
    //   setMarketCap(Number((Buddiland.usdPrice * totalSupply).toFixed()));
    //   return Buddiland;
    // }
    // getCoinData();
    
    const getHolders = async () => {
      const GetBlockTokenHoldersDto  = {
        chainId: 56,
        contractAddress: Buddi_ADDRESS,
        pageSize: 10000,
        blockHeight: 'latest',
      };
      try {
        const holders = await Moralis.Plugins.covalent.getBlockTokenHolders(
          GetBlockTokenHoldersDto 
        );
        setTokenHolders(holders.data.pagination.total_count);
      } catch (error) {
        setTokenHolders(0);
      }
    }

    Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID}).then(() => {
      Moralis.initPlugins();
      getHolders();
    });
  }, []);

  return <GlobalContext.Provider value={{ BuddiPrice, tokenHolders, totalSupply, marketCap }}>{ props.children }</GlobalContext.Provider>;
};

export default GlobalContextProvider;

