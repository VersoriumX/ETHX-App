import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);

export async function resolveEthX(address) {
  try {
    const name = await provider.lookupAddress(address);
    if (name && (name.endsWith(".ethx.io") || name.endsWith(".ethx.xyz"))) {
      return name;
    }
  } catch (error) {
    console.error("Reverse DNS lookup failed", error);
  }
  return null;
}
