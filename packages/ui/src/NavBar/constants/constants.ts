import { Link } from "@ui/Link";

import { Button } from "../../Button";
import { ItemComponentConfig, NavItemTypes } from "../types";

export const itemComponentConfig: ItemComponentConfig = {
  [NavItemTypes.link]: Link,
  [NavItemTypes.button]: Button,
};
