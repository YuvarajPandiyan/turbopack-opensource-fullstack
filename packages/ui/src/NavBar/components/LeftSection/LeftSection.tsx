import { NavbarContent, NavbarItem } from "@heroui/react";
import {
  GetItemPropsForType,
  getItemPropsForType,
  itemComponentConfig,
} from "@ui/NavBar";
import { ComponentType } from "react";

import { LeftSectionProps } from "./types";

export const LeftSection = ({ leftSection }: LeftSectionProps) => {
  return (
    <NavbarContent className="sm:flex gap-4" justify="center">
      {leftSection?.navItems.map((item, index) => {
        const ItemComponent = itemComponentConfig[item.type] as ComponentType<
          GetItemPropsForType[typeof item.type]
        >;
        const propsForType = getItemPropsForType(item.type);
        return (
          <NavbarItem key={index}>
            <ItemComponent {...propsForType}>{item.label}</ItemComponent>
          </NavbarItem>
        );
      })}
    </NavbarContent>
  );
};
