
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrustBadge from './TrustBadge';
import { NFT } from '@/utils/nftData';
import { Button } from '@/components/ui/button';

interface NFTCardProps {
  nft: NFT;
}

const NFTCard = ({ nft }: NFTCardProps) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/nft/${nft.id}`);
  };

  return (
    <div 
      className="pixel-card overflow-hidden group flex flex-col h-full transition-all duration-500 cursor-pointer hover:transform hover:translate-y-[-5px] active:translate-y-[2px]"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden aspect-square mb-3">
        <img 
          src={nft.image} 
          alt={nft.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
          style={{ imageRendering: 'pixelated' }}
        />
        {nft.verified && nft.badgeType && nft.badgeType !== 'none' && (
          <div className="absolute top-2 right-2">
            <TrustBadge type={nft.badgeType} />
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-minecraft text-lg text-obsidian">{nft.name}</h3>
          <span className="bg-stone/60 px-2 py-1 text-xs rounded font-minecraft text-white">{nft.collection}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 flex-1 line-clamp-2 font-minecraft text-xs">{nft.description}</p>
        
        {nft.verified ? (
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-sm">
              <span className="font-medium font-minecraft">Authenticity:</span>
              <span className="font-minecraft">{nft.authenticityScore}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-medium font-minecraft">Rarity:</span>
              <span className="font-minecraft">{nft.rarityRank}</span>
            </div>
          </div>
        ) : (
          <div className="h-14"></div>
        )}
        
        <div 
          className="w-full text-center py-2 font-minecraft text-sm bg-stone/20"
          onClick={(e) => e.stopPropagation()}
        >
          {nft.verified ? 'Verified ✓' : 'Click for details'}
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
