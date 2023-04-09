import { ethers } from 'ethers';
import React, { ContextType, useEffect, useState } from 'react';

import { contractAbi, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext({});

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

export const TransactionProvider = ({ children }) => {
  return (
    <TransactionContext.Provider>
        {children}
    </TransactionContext.Provider>
  );
};