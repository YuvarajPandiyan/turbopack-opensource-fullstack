import { NavBar } from "@repo/ui";

import { NAVBAR_CONFIG } from "./config/navbar.config";

export const LandingPageNavbar = () => {
  return (
    <NavBar
      brandConfig={NAVBAR_CONFIG.brandConfig}
      rightSection={NAVBAR_CONFIG.rightSection}
    />
  );
};
