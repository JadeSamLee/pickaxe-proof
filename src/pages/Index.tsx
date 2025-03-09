
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import NFTGallery from '@/components/NFTGallery';
import { mockNFTs, NFT } from '@/utils/nftData';
import { getWalletAddress } from '@/utils/metamask';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    const checkWalletAndLoadNFTs = async () => {
      setIsLoading(true);
      const address = await getWalletAddress();
      
      if (address) {
        setWalletConnected(true);
        setTimeout(() => {
          setNfts(mockNFTs);
          setIsLoading(false);
        }, 1000);
      } else {
        setWalletConnected(false);
        setIsLoading(false);
      }
    };
    
    checkWalletAndLoadNFTs();
    const interval = setInterval(checkWalletAndLoadNFTs, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        {/* Hero Section */}
        <div className="glass-panel p-8 rounded-sm border-2 border-stone mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-minecraft text-white mb-4" style={{ textShadow: '3px 3px #000' }}>
                <span className="text-grass">NFT</span> Authenticator
              </h1>
              <p className="text-white/90 font-minecraft text-sm mb-6 max-w-xl">
                Verify NFTs with our AI-powered authenticator. 
                We provide authenticity scores and rarity rankings for your digital assets.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                {!walletConnected && (
                  <Button 
                    className="minecraft-btn-green" 
                    onClick={async () => {
                      try {
                        await getWalletAddress();
                      } catch (error) {
                        console.error('Failed to connect wallet:', error);
                      }
                    }}
                  >
                    Connect Wallet
                  </Button>
                )}
                <Link to="/about">
                  <Button className="minecraft-btn-stone w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-64 md:h-80">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-grass rounded-sm border-4 border-stone animate-float">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-minecraft text-obsidian text-4xl">NFT</span>
                </div>
              </div>
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gold rounded-sm border-4 border-stone animate-bob" style={{ animationDelay: "0.5s" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-minecraft text-obsidian text-2xl">Sonic</span>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-diamond rounded-sm border-4 border-stone animate-bob" style={{ animationDelay: "1s" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-minecraft text-white text-2l">ZerePy</span>
                </div>
              </div>
              <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-iron rounded-sm border-2 border-stone animate-bob" style={{ animationDelay: "1.5s" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-minecraft text-obsidian text-xl">Auth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* NFT Gallery Section */}
        <div className="glass-panel p-8 rounded-sm border-2 border-stone">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-minecraft text-white mb-4" style={{ textShadow: '2px 2px #000' }}>
              Your NFT Collection
            </h2>
            <div className="flex justify-center">
              <p className="text-white/90 max-w-2xl text-center font-minecraft text-sm">
                Connect your wallet to view and verify your NFTs. Click on an NFT to see details and verify its authenticity.
              </p>
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-pulse-gentle font-minecraft text-white">Loading NFTs...</div>
            </div>
          ) : walletConnected ? (
            <NFTGallery nfts={nfts} />
          ) : (
            <div className="text-center py-16 glass-panel border border-stone">
              <h3 className="font-minecraft text-xl text-white mb-2" style={{ textShadow: '2px 2px #000' }}>Wallet Not Connected</h3>
              <p className="text-white/80 font-minecraft mb-6">Please connect your wallet to view and verify your NFTs</p>
              <Button 
                className="minecraft-btn-green" 
                onClick={async () => {
                  try {
                    await getWalletAddress();
                  } catch (error) {
                    console.error('Failed to connect wallet:', error);
                  }
                }}
              >
                Connect Wallet
              </Button>
            </div>
          )}
        </div>
        
        {/* Features Section */}
        <div className="glass-panel p-8 rounded-sm border-2 border-stone mt-8">
          <h2 className="text-3xl font-minecraft text-white text-center mb-8" style={{ textShadow: '2px 2px #000' }}>
            Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 p-6 border border-stone">
              <div className="w-12 h-12 bg-grass rounded-sm flex items-center justify-center mb-4 border-2 border-stone">
                <span className="font-minecraft text-obsidian text-2xl">1</span>
              </div>
              <h3 className="text-xl font-minecraft text-gold mb-2" style={{ textShadow: '1px 1px #000' }}>Connect Wallet</h3>
              <p className="text-white/80 font-minecraft text-xs">Link your cryptocurrency wallet to access your NFT collection securely.</p>
            </div>
            
            <div className="bg-black/50 p-6 border border-stone">
              <div className="w-12 h-12 bg-gold rounded-sm flex items-center justify-center mb-4 border-2 border-stone">
                <span className="font-minecraft text-obsidian text-2xl">2</span>
              </div>
              <h3 className="text-xl font-minecraft text-gold mb-2" style={{ textShadow: '1px 1px #000' }}>Select NFT</h3>
              <p className="text-white/80 font-minecraft text-xs">Browse and choose the NFT you want to authenticate.</p>
            </div>
            
            <div className="bg-black/50 p-6 border border-stone">
              <div className="w-12 h-12 bg-diamond rounded-sm flex items-center justify-center mb-4 border-2 border-stone">
                <span className="font-minecraft text-white text-2xl">3</span>
              </div>
              <h3 className="text-xl font-minecraft text-gold mb-2" style={{ textShadow: '1px 1px #000' }}>Verify & Badge</h3>
              <p className="text-white/80 font-minecraft text-xs">Get authenticity scores, rarity rankings, and earn Trust Badges for the NFTs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
