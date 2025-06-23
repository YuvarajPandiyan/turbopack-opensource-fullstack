import { NavBarProps, NavBarRightSection, NavItemTypes } from "@repo/ui";

// constants
const BRAND_LOGO_PATH = "/brandAssets/YT.webp";

const RIGHT_SECTION: NavBarRightSection = {
  navItems: [
    {
      href: "/howItWorks",
      label: "How it works",
      type: NavItemTypes.link,
    },
    {
      href: "/login",
      label: "Login",
      type: NavItemTypes.button,
    },
    { href: "/signUp", label: "Sign Up", type: NavItemTypes.button },
  ],
};

export const NAVBAR_CONFIG: NavBarProps = {
  brandConfig: {
    width: 60,
    height: 60,
    src: BRAND_LOGO_PATH,
    brandName: "Sample App",
    alt: "Sample App",
  },
  rightSection: RIGHT_SECTION,
};
