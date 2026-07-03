import { ethers } from "ethers";

export async function resolveEthX(address) {
  if (typeof window === "undefined" || !window.ethereum) {
    return null;
  }
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const name = await provider.lookupAddress(address);
    if (name && (name.endsWith(".ethx.io") || name.endsWith(".ethx.xyz"))) {
      return name;
    }
  } catch (error) {
    console.error("Reverse DNS lookup failed", error);
  }
  return null;
}
