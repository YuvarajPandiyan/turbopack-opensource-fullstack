import { Button } from "@heroui/react";

import { ButtonProps } from "./types";

export const ButtonComponent = ({ children, ...restProps }: ButtonProps) => {
  return (
    // TODO: take the button type "primary" | "default" | "secondary" | "success" | "warning" | "danger" | undefined
    <Button color="primary" {...restProps}>
      {children}
    </Button>
  );
};
