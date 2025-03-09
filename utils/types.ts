export interface NFTMetadata {
  name: string;
  image: string;
  traits: Array<{
    trait_type: string;
    value: string;
  }>;
}

export interface NFTData {
  tokenId: string;
  metadata: NFTMetadata;
  owner: string;
  transactionHistory: Array<{
    timestamp: number;
    from: string;
    to: string;
  }>;
}

export enum RarityRank {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  Epic = 'Epic',
  Legendary = 'Legendary'
}

export interface AuthenticationResult {
  authenticityScore: number;
  rarityRank: RarityRank;
  details: string[];
  ownershipVerified: boolean;
} 