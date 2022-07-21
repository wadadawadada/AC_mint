import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "ARTCO Membership", // Required
      infuraId: "cc7561dbfa8e4d8e9578646e37f6cecd" // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: "cc7561dbfa8e4d8e9578646e37f6cecd" // required
    }
  }
};