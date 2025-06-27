import type { GeneralBackendTrpcAppRouter } from "@repo/trpc-schema/generalBackend";
import { createTRPCReact } from "@trpc/react-query";

export const generalBackendTrpc: ReturnType<
  typeof createTRPCReact<GeneralBackendTrpcAppRouter>
> = createTRPCReact<GeneralBackendTrpcAppRouter>();
