import { ethers } from 'ethers';
import React, { Context, ContextType, useEffect, useState } from 'react';
import { type MetaMaskInpageProvider } from '@metamask/providers';

import { contractAbi, contractAddress } from '../utils/constants';


export interface defaultValue {
  connectWallet: () => Promise<void>;
  currentAccount: string;
}

export const TransactionContext = React.createContext<defaultValue | null>(null);

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider & ethers.providers.ExternalProvider;
  }
}

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer);
  console.log({
    provider,
    signer,
    transactionContract
  });
};

export const TransactionProvider = ({ children }: React.PropsWithChildren): JSX.Element => {
  const [currentAccount, setCurrentAccount] = useState('');

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

  const connectWallet = async () => {
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

  useEffect(() => {
    void checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
        {children}
    </TransactionContext.Provider>
  );
};
