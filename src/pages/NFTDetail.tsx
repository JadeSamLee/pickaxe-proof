
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NFT, verifyNFT } from '@/utils/nftData';
import { Button } from '@/components/ui/button';
import TrustBadge from '@/components/TrustBadge';
import { toast } from 'sonner';
import { connectWallet } from '@/utils/metamask';
import Header from '@/components/Header';

const NFTDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nft, setNft] = useState<NFT | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [confirmingWallet, setConfirmingWallet] = useState(false);

  useEffect(() => {
    const fetchNFT = async () => {
      const { mockNFTs } = await import('@/utils/nftData');
      const foundNFT = mockNFTs.find(n => n.id === Number(id));
      
      if (foundNFT) {
        setNft(foundNFT);
      }
      setIsLoading(false);
    };
    
    fetchNFT();
  }, [id]);

  const handleVerify = async () => {
    if (!nft || verifying) return;
    
    setVerifying(true);
    setConfirmingWallet(true);
    
    toast.info("Please confirm the transaction in your wallet...", {
      duration: 5000,
    });
    
    try {
      await connectWallet();
      
      setConfirmingWallet(false);
      toast.info(`Authenticating "${nft.name}"...`, {
        duration: 2000,
      });
      const verificationData = await verifyNFT(nft.id);
      const updatedNFT = {
        ...nft,
        verified: true,
        authenticityScore: verificationData.authenticityScore,
        rarityRank: verificationData.rarityRank,
        badgeType: verificationData.badgeType
      };
      
      setNft(updatedNFT);
      
      toast.success(`"${nft.name}" verified successfully!`, {
        description: `Authenticity: ${verificationData.authenticityScore}% | Rank: ${verificationData.rarityRank}`
      });
    } catch (error) {
      console.error('Verification error:', error);
      toast.error(`Failed to verify "${nft?.name}"`, {
        description: 'Please try again later'
      });
    } finally {
      setVerifying(false);
      setConfirmingWallet(false);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Header />
          <div className="glass-panel p-8 rounded-sm">
            <div className="flex justify-center items-center h-40">
              <div className="animate-pulse-gentle font-minecraft text-white">Loading NFT...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Header />
          <div className="glass-panel p-8 rounded-sm">
            <div className="text-center py-16">
              <h3 className="font-minecraft text-xl text-white mb-2">NFT Not Found</h3>
              <p className="text-white/80 mb-4">We couldn't find the NFT you're looking for.</p>
              <Button className="minecraft-btn-stone" onClick={handleBack}>
                Back to Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="glass-panel p-8 rounded-sm">
          <Button className="minecraft-btn-stone mb-6" onClick={handleBack}>
            ← Back to Gallery
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="pixel-border relative aspect-square overflow-hidden">
                <img 
                  src={nft.image} 
                  alt={nft.name}
                  className="w-full h-full object-cover"
                />
                {nft.verified && nft.badgeType && nft.badgeType !== 'none' && (
                  <div className="absolute top-4 right-4">
                    <TrustBadge type={nft.badgeType} />
                  </div>
                )}
              </div>
            </div>
            
            <div className="glass-panel p-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-minecraft text-white">{nft.name}</h1>
                <span className="bg-stone/50 backdrop-blur-sm px-3 py-1 text-sm rounded text-white">
                  {nft.collection}
                </span>
              </div>
              
              <p className="text-white/90 mb-6">{nft.description}</p>
              
              <div className="border-t border-white/20 my-6"></div>
              
              {nft.verified ? (
                <div className="space-y-4 mb-6">
                  <h3 className="font-minecraft text-lg text-white mb-2">Verification Results</h3>
                  
                  <div className="glass-panel p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-white/80">Authenticity Score:</span>
                      <span className="font-minecraft text-white">{nft.authenticityScore}%</span>
                    </div>
                    
                    <div className="w-full bg-stone/30 h-2 rounded-sm overflow-hidden">
                      <div 
                        className={`h-full ${nft.badgeType === 'diamond' ? 'bg-diamond' : nft.badgeType === 'gold' ? 'bg-gold' : 'bg-iron'}`} 
                        style={{ width: `${nft.authenticityScore}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-sm mt-4">
                      <span className="font-medium text-white/80">Rarity Rank:</span>
                      <span className="font-minecraft text-white">{nft.rarityRank}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm mt-4">
                      <span className="font-medium text-white/80">Trust Badge:</span>
                      <span className={`font-minecraft ${
                        nft.badgeType === 'diamond' ? 'text-diamond' : 
                        nft.badgeType === 'gold' ? 'text-gold' : 
                        nft.badgeType === 'iron' ? 'text-iron' : 'text-white/80'
                      }`}>
                        {nft.badgeType === 'diamond' ? 'Diamond' : 
                         nft.badgeType === 'gold' ? 'Gold' : 
                         nft.badgeType === 'iron' ? 'Iron' : 'None'}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <p className="text-white/80 mb-4">This NFT has not been verified yet. Verify it to see authenticity metrics and earn a Trust Badge.</p>
                </div>
              )}
              
              <Button 
                className={`w-full ${nft.verified ? 'minecraft-btn-stone' : 'minecraft-btn-green'}`}
                disabled={verifying}
                onClick={handleVerify}
              >
                {confirmingWallet ? 'Confirm in Wallet...' : 
                 verifying ? 'Verifying...' : 
                 nft.verified ? 'Verified ✓' : 'Verify NFT'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
