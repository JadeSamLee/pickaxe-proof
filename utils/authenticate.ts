// src/utils/authenticate.ts

import { NFTData, AuthenticationResult } from './types';
import axios from 'axios';

const API_URL = 'http://localhost:8000'; 

export async function mintNFT(nft: NFTData): Promise<AuthenticationResult> {
  try {
    const { data } = await axios.post(`${API_URL}/mint`, {
      token_id: nft.tokenId,
      metadata: nft.metadata,
      owner_address: nft.owner
    });

    return data; 
  } catch (error) {
    console.error('Failed to mint NFT:', error);
    throw new Error('NFT minting failed');
  }
}

export async function verifyNFT(nft: NFTData): Promise<AuthenticationResult> {
  try {
    const { data } = await axios.post(`${API_URL}/verify`, {
      token_id: nft.tokenId,
      owner_address: nft.owner
    });

    return data; 
  } catch (error) {
    console.error('Failed to verify NFT:', error);
    throw new Error('NFT verification failed');
  }
}