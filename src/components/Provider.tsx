"use client";

import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      supportedWallets={[metamaskWallet()]}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: process.env.NEXT_PUBLIC_RELAYER_URL!,
          },
        },
      }}
    >
      {children}
    </ThirdwebProvider>
  );
};

export default Provider;
