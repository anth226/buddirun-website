import { Contracts } from '../yam/contracts';
import Web3 from 'web3';
export default class Web3Client {
  web3 ;
  contracts ;    
  constructor(apiUrl, options) {
    this.web3 = new Web3(apiUrl);
    this.contracts = new Contracts(this.web3);
  }
}
