import { Contract } from 'web3-eth-contract';
// import { AbiItem } from 'web3-utils';
import { addressMap, Buddi_NFT_ADDRESS } from '../config';
import BuddiNFT from '../contracts/BuddiNFT.json';
import BuddiCollection from '../contracts/BuddiCollection.json';

export class Contracts {
  web3 ;
  contractsMap ;
  
  constructor(web3) {
    this.web3 = web3;
    this.contractsMap = {};

    this.contractsMap = {
      'BuddiCollection': new web3.eth.Contract(BuddiCollection),
      'BuddiNFT': new web3.eth.Contract(BuddiNFT),
    }

    this._updateContractAddresses();
  }

  _updateContractAddresses() {
    this.contractsMap['BuddiCollection'].options.address = addressMap['BuddiCollection'];
    this.contractsMap['BuddiNFT'].options.address = addressMap['BuddiNFT'];
 }
}
  