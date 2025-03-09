from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List
from .nft_authenticator import NFTAuthenticator

app = FastAPI()
authenticator = NFTAuthenticator()

class NFTRequest(BaseModel):
    token_id: str
    metadata: Dict[str, Any]
    owner_address: str

class AuthenticationResponse(BaseModel):
    authenticity_score: float
    rarity_rank: str
    details: List[str]
    ownership_verified: bool

@app.post("/authenticate", response_model=AuthenticationResponse)
async def authenticate_nft(request: NFTRequest):
    try:
        # Verify ownership
        ownership_verified = await authenticator.verify_ownership(
            request.token_id,
            request.owner_address
        )
        
        # Analyze NFT
        authenticity_score, rarity_rank, details = await authenticator.analyze_nft(
            request.token_id,
            request.metadata
        )
        
        return AuthenticationResponse(
            authenticity_score=authenticity_score,
            rarity_rank=rarity_rank,
            details=details,
            ownership_verified=ownership_verified
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 