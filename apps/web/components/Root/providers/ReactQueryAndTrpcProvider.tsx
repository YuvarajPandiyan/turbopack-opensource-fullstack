import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";

import { generalBackendTrpc } from "../../../utils/trpc";

type ReactQueryProviderProps = {
  children: React.ReactNode;
};

const getAuthCookie = () => {
  return "";
};

export const ReactQueryAndTrpcProvider = ({
  children,
}: ReactQueryProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    generalBackendTrpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3001/trpc",
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              authorization: getAuthCookie(),
            };
          },
        }),
      ],
    })
  );

  return (
    <generalBackendTrpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </generalBackendTrpc.Provider>
  );
};
