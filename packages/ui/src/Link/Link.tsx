import { Link } from "@heroui/react";

import { LinkProps } from "./types";

export const LinkComponent = ({ children, ...restProps }: LinkProps) => {
  return <Link {...restProps}>{children}</Link>;
};
