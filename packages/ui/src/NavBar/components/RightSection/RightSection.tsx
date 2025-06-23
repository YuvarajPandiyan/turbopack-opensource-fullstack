import { NavbarContent, NavbarItem } from "@heroui/react";
import {
  GetItemPropsForType,
  getItemPropsForType,
  itemComponentConfig,
} from "@ui/NavBar";

import { rightSectionProps } from "./types";

export const RightSection = ({ rightSection }: rightSectionProps) => {
  return (
    <NavbarContent justify="end">
      {rightSection?.navItems.map((item, index) => {
        const { type, label, ...restProps } = item;
        const ItemComponent = itemComponentConfig[type] as React.ComponentType<
          GetItemPropsForType[typeof type]
        >;
        const propsForType = getItemPropsForType(
          type,
          restProps as GetItemPropsForType[typeof type]
        );
        return (
          <NavbarItem key={index}>
            <ItemComponent {...propsForType}>{label}</ItemComponent>
          </NavbarItem>
        );
      })}
    </NavbarContent>
  );
};
