import { NavBar } from "@repo/ui";

import { generalBackendTrpc } from "../../utils/trpc";
import { NAVBAR_CONFIG } from "./config/navbar.config";

export const LandingPageNavbar = () => {
  const { data } = generalBackendTrpc.user.findAll.useQuery();
  console.log({ data });
  return (
    <>
      <NavBar
        brandConfig={NAVBAR_CONFIG.brandConfig}
        rightSection={NAVBAR_CONFIG.rightSection}
      />
      Yuvi
      {JSON.stringify(data)}
    </>
  );
};
