
interface EthereumWindow extends Window {
  ethereum?: {
    isMetaMask?: boolean;
    request: (request: { method: string; params?: any[] }) => Promise<any>;
  };
}

const ethereum = (window as unknown as EthereumWindow).ethereum;

export const isMetaMaskInstalled = (): boolean => {
  return ethereum && ethereum.isMetaMask ? true : false;
};

export const connectWallet = async (): Promise<string | null> => {
  if (!isMetaMaskInstalled()) {
    console.error("MetaMask is not installed");
    return null;
  }

  try {
    const accounts = await ethereum!.request({
      method: "eth_requestAccounts",
    });

    if (accounts && accounts.length > 0) {
      return accounts[0] as string;
    }
    return null;
  } catch (error) {
    console.error("Error connecting to MetaMask", error);
    return null;
  }
};

export const getWalletAddress = async (): Promise<string | null> => {
  if (!isMetaMaskInstalled()) return null;

  try {
    const accounts = await ethereum!.request({
      method: "eth_accounts",
    });

    if (accounts && accounts.length > 0) {
      return accounts[0] as string;
    }
    return null;
  } catch (error) {
    console.error("Error getting wallet address", error);
    return null;
  }
};

export const shortenAddress = (address: string): string => {
  if (!address) return "";
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};
