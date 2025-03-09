# PickaxeProof: NFT Authenticator 

**PickaxeProof** is an AI-powered NFT authenticator built for the Sonic blockchain with a Minecraft twist. Here’s how it flows:

1. **Set Up Locally**  
   - Run `npm install` to install dependencies.  
   - Run `npm run dev` to start the app locally (visit `http://localhost:8080`).

2. **Connect Wallet**  
   - Open the app and connect your MetaMask wallet to the Sonic testnet.

3. **Mint an NFT**  
   - Use the `MinecraftNFT` contract to mint a new NFT with a token URI.

4. **AI Verification**  
   - The ZerePy AI agent analyzes the NFT’s metadata and transaction history every 30 seconds to check authenticity and rarity.

5. **Get a Score**  
   - The AI assigns an authenticity score (0-100) and a rarity rank (Common, Rare, Epic).

6. **Mint a Trust Badge**  
   - If verified, a Trust Badge (Iron, Gold, or Diamond) is minted as a token based on the score.

7. **View Results**  
   - See your NFT, score, and badge in a Minecraft-style UI—blocky, green, and pixel-perfect.
