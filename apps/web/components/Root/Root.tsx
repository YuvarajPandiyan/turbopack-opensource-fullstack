import React from "react";

import { ReactQueryProvider } from "./providers";

type RootProviderProps = {
  children: React.ReactNode;
};

export const RootProvider = ({ children }: RootProviderProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
