
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWalletAddress, shortenAddress, connectWallet } from '@/utils/metamask';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    const checkWalletConnection = async () => {
      const address = await getWalletAddress();
      setWalletAddress(address);
    };
    
    checkWalletConnection();
  }, []);

  const handleConnectWallet = async () => {
    setConnecting(true);
    try {
      const address = await connectWallet();
      setWalletAddress(address);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setConnecting(false);
    }
  };

  return (
    <header className="glass-panel py-4 px-6 flex items-center justify-between mb-8 border-2 border-stone">
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
          <img src="public/logo.png" alt="PickaxeProof Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-minecraft tracking-wider text-white" style={{ textShadow: '2px 2px #000' }}>PickaxeProof</h1>
        </Link>
        <div className="px-2 py-1 rounded-full bg-dirt/90 backdrop-blur-sm border border-stone">
          <span className="text-xs font-bold text-white font-minecraft">NFT Authenticator</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex space-x-4 mr-4">
          <Link to="/" className="font-minecraft text-white hover:text-grass transition-colors">Home</Link>
          <Link to="/about" className="font-minecraft text-white hover:text-grass transition-colors">About</Link>
        </nav>
        
        {walletAddress ? (
          <div className="glass-panel px-4 py-2 rounded-sm text-white animate-pulse-gentle border border-stone">
            <span className="font-minecraft text-sm">{shortenAddress(walletAddress)}</span>
          </div>
        ) : (
          <Button 
            className="minecraft-btn-green" 
            onClick={handleConnectWallet}
            disabled={connecting}
          >
            {connecting ? 'Connecting...' : 'Connect Wallet'}
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
