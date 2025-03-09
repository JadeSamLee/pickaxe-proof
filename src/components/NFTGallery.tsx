
import { useState } from 'react';
import NFTCard from './NFTCard';
import { NFT } from '@/utils/nftData';

interface NFTGalleryProps {
  nfts: NFT[];
}

const NFTGallery = ({ nfts }: NFTGalleryProps) => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nfts.map(nft => (
          <NFTCard 
            key={nft.id} 
            nft={nft}
          />
        ))}
      </div>
      
      {nfts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="font-minecraft text-xl mb-2 text-white">No NFTs Found</h3>
          <p className="text-white/80">Connect your wallet to view your NFTs</p>
        </div>
      )}
    </div>
  );
};

export default NFTGallery;
