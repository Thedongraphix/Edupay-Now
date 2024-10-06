// hooks/usePayment.ts
import { useContract, useSigner } from 'wagmi';
import { ethers } from 'ethers';

const usePayment = () => {
  const { data: signer } = useSigner();
  const contract = useContract({
    address: '0xYourSmartContractAddress',
    abi: YourSmartContractABI,
    signerOrProvider: signer,
  });

  const makePayment = async (amount: number) => {
    try {
      const tx = await contract.payFees({ value: ethers.utils.parseEther(amount.toString()) });
      await tx.wait();
      // Handle successful payment
    } catch (error) {
      console.error('Payment failed', error);
    }
  };

  return { makePayment };
};

export default usePayment;
