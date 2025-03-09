
export interface NFT {
  id: number;
  name: string;
  image: string;
  description: string;
  collection: string;
  verified: boolean;
  authenticityScore?: number;
  rarityRank?: string;
  badgeType?: 'none' | 'iron' | 'gold' | 'diamond';
}

export const mockNFTs: NFT[] = [
  {
    id: 1,
    name: "Diamond Pickaxe",
    image: "https://purepng.com/public/uploads/large/mincraft-diamond-pick-axe-xqm.png",
    description: "The legendary Diamond Pickaxe NFT, one of the most sought after items in the collection.",
    collection: "Minecraft Essentials",
    verified: false,
  },
  {
    id: 2,
    name: "Golden Sword",
    image: "https://art.pixilart.com/b7a4a91431e2827.png",
    description: "A shining Golden Sword, crafted with precision and care.",
    collection: "Minecraft Weapons",
    verified: false,
  },
  {
    id: 3,
    name: "Enchanted Bow",
    image: "https://www.pngkit.com/png/full/223-2238783_assets-for-then-vs-now-minecraft-bow-transparent.png",
    description: "An Enchanted Bow with unmatched power and precision.",
    collection: "Minecraft Weapons",
    verified: false,
  },
  {
    id: 4,
    name: "Emerald Block",
    image: "https://gamepedia.cursecdn.com/minecraft_gamepedia/archive/0/0b/20180407134447!Block_of_Emerald_JE4_BE3.png",
    description: "A rare Emerald Block, perfect for trading with villagers.",
    collection: "Minecraft Treasures",
    verified: false,
  },
  {
    id: 5,
    name: "Ender Pearl",
    image: "http://pixelartmaker.com/art/fe257fc8d158300.png",
    description: "A mysterious Ender Pearl, used for teleportation.",
    collection: "Minecraft Essentials",
    verified: false,
  },
];

export const verifyNFT = (nftId: number): Promise<{
  authenticityScore: number;
  rarityRank: string;
  badgeType: 'none' | 'iron' | 'gold' | 'diamond';
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const authenticityScore = Math.floor(Math.random() * 70) + 30;
      let rarityRank = 'Common';
      let badgeType: 'none' | 'iron' | 'gold' | 'diamond' = 'none';
      
      if (authenticityScore >= 85) {
        rarityRank = 'Legendary';
        badgeType = 'diamond';
      } else if (authenticityScore >= 70) {
        rarityRank = 'Epic';
        badgeType = 'gold';
      } else if (authenticityScore >= 50) {
        rarityRank = 'Rare';
        badgeType = 'iron';
      } else {
        rarityRank = 'Common';
        badgeType = 'none';
      }
      
      resolve({
        authenticityScore,
        rarityRank,
        badgeType
      });
    }, 2000); 
  });
};
