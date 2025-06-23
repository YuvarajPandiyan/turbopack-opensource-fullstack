import { Navbar, NavbarBrand } from "@heroui/react";
import { Image } from "@ui/Image";
import { Link } from "@ui/Link";

import { LeftSection } from "./components/LeftSection";
import { RightSection } from "./components/RightSection/RightSection";
import { NavBarProps } from "./types";

export const NavBar = ({
  brandConfig,
  leftSection,
  rightSection,
}: NavBarProps) => {
  const { brandName, ...restBrandName } = brandConfig;
  return (
    <Navbar>
      <NavbarBrand>
        {/* expecting this local icon will be a root URL redirection link */}
        <Link href="/">
          <Image {...restBrandName} />
          <p className="font-bold text-inherit">{brandName}</p>
        </Link>
      </NavbarBrand>
      <LeftSection leftSection={leftSection} />
      <RightSection rightSection={rightSection} />
    </Navbar>
  );
};
