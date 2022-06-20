import { Contracts } from './contracts';

export default class Yam {
  web3 ;
  contracts ;
  constructor(_web3, options) {
    this.web3 = _web3;
    this.contracts = new Contracts(this.web3);
  }
}
