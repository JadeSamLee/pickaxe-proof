
import React from 'react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="glass-panel p-8 rounded-sm border-2 border-stone">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-minecraft text-white mb-4" style={{ textShadow: '3px 3px #000' }}>About PickaxeProof</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="glass-panel p-6 border border-stone">
              <h2 className="text-2xl font-minecraft text-grass mb-4" style={{ textShadow: '2px 2px #000' }}>Our Mission</h2>
              <p className="text-white/90 font-minecraft text-sm leading-relaxed">
                PickaxeProof was founded with a simple goal: to bring trust and authenticity to the world of blockchain NFTs with a touch of Minecraft nostalgia. We believe in the power of Sonic and ZerePy to authenticate unique digital assets and our mission is to make the process AI powered.
              </p>
            </div>
            
            <div className="glass-panel p-6 border border-stone">
              <h2 className="text-2xl font-minecraft text-grass mb-4" style={{ textShadow: '2px 2px #000' }}>How It Works</h2>
              <p className="text-white/90 font-minecraft text-sm leading-relaxed">
                Our platform uses an agent-based AI system to verify the authenticity and rarity of your NFTs. Connect your wallet, select an NFT, and our system will analyze its blockchain data to determine its authenticity score and rarity rank. Upon verification, you'll receive a Trust Badge that certifies your NFT's status.
              </p>
            </div>
          </div>
          
          <div className="glass-panel p-6 border border-stone mb-8">
            <h2 className="text-2xl font-minecraft text-grass mb-4" style={{ textShadow: '2px 2px #000' }}>Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 p-4 border border-stone">
                <h3 className="text-xl font-minecraft text-gold mb-2" style={{ textShadow: '1px 1px #000' }}>Blockchain Integration</h3>
                <p className="text-white/80 font-minecraft text-xs">Seamlessly connects with your wallet to access and verify your NFT collection.</p>
              </div>
              <div className="bg-black/50 p-4 border border-stone">
                <h3 className="text-xl font-minecraft text-gold mb-2" style={{ textShadow: '1px 1px #000' }}>AI Verification</h3>
                <p className="text-white/80 font-minecraft text-xs">Agent analyzes NFT data to determine authenticity and rarity with high precision.</p>
              </div>
              <div className="bg-black/50 p-4 border border-stone">
                <h3 className="text-xl font-minecraft text-gold mb-2" style={{ textShadow: '1px 1px #000' }}>Trust Badges</h3>
                <p className="text-white/80 font-minecraft text-xs">Securely minted on the Sonic blockchain to certify your NFT's verified status and rarity level.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-grass font-minecraft text-sm" style={{ textShadow: '1px 1px #000' }}>© 2025 PickaxeProof • All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
