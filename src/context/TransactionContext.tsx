import { type Contract, ethers, Transaction, ContractTransaction, ContractFunction, ContractInterface, type BaseContract, ContractReceipt, type BigNumber } from 'ethers';
import React, { Context, ContextType, Dispatch, SetStateAction, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { type MetaMaskInpageProvider } from '@metamask/providers';

import { contractAbi, contractAddress } from '../utils/constants';
import { type TransactionResponse } from '@ethersproject/abstract-provider';


export interface DefaultValue {
  connectWallet: () => Promise<void>;
  currentAccount: string;
  formData: FormDataValues;
  setFormData: (values: FormDataValues) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  sendTransaction: () => Promise<void>;
}

interface FormDataValues {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}

interface MyContract extends BaseContract {
  addToBlockchain: (addressTo: string, parsedAmount: BigNumber, message: string, keyword: string) => Promise<TransactionResponse>;
  getTransactionCount: () => Promise<string>;
}

export const TransactionContext = React.createContext<DefaultValue | null>(null);

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider & ethers.providers.ExternalProvider;
  }
}

const { ethereum } = window;

const getEthereumContract = (): MyContract => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer) as MyContract;

  return transactionContract;
};

export const TransactionProvider = ({ children }: React.PropsWithChildren): JSX.Element => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' } satisfies FormDataValues);
  const [isLoading, setIsLoading] = useState(false);
  // const [transactionCount2, setTransactionCount2] = useState(localStorage.getItem('transactionCount') ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string): void => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value
    }));
  };

  const checkIfWalletIsConnected = async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    try {
      if (!ethereum) {
        alert('Please install Metamask!'); return;
      }
      const accounts = await ethereum.request({ method: 'eth_accounts' }) as string[];
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log('No ethereum object');
    }
  };

  const connectWallet = async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!ethereum) {
      alert('Please install Metamask!');
    } else {
      await ethereum.request({ method: 'eth_requestAccounts' })
        .then((acc) => { setCurrentAccount(acc[0]); })
        .catch(() => {
          console.log('No ethereum object');
          throw new Error('No ethereum object');
        });
    }
  };

  const sendTransaction = async (): Promise<void> => {
    try {
      if (!ethereum) {
        alert('Please install Metamask!');
      }
      const { addressTo, amount, keyword, message } = formData;
      const contract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208',
            value: parsedAmount._hex
          }
        ]
      });
      const transcationHash = await contract.addToBlockchain(addressTo, parsedAmount, message, keyword);
      setIsLoading(true);

      await transcationHash.wait().then(() => {
        setIsLoading(false);
      });
      // const transactionCount = await contract.getTransactionCount();
      // setTransactionCount2(transactionCount);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.');
    }
  };

  useEffect(() => {
    void checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
        {children}
    </TransactionContext.Provider>
  );
};
