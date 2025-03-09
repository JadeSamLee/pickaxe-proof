async function main() {
    const MinecraftNFT = await ethers.getContractFactory("MinecraftNFT");
    const nft = await MinecraftNFT.deploy();
    await nft.deployed();
    console.log("MinecraftNFT deployed to:", nft.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });