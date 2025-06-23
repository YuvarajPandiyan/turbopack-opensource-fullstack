import { ButtonProps } from "@ui/Button";
import { ImageProps } from "@ui/Image";
import { LinkProps } from "@ui/Link";
import { ComponentType } from "react";

export enum NavItemTypes {
  link = "link",
  button = "button",
}

export interface NavBarLinkItem extends Omit<LinkProps, "children"> {
  label: string;
  type: NavItemTypes.link;
}

export interface NavBarButtonItem extends Omit<ButtonProps, "children"> {
  label: string;
  type: NavItemTypes.button;
}

export type NavBarItem = NavBarLinkItem | NavBarButtonItem;

export interface NavBarLeftSection {
  navItems: NavBarItem[];
}
export interface NavBarRightSection {
  navItems: NavBarItem[];
}

export interface NavBarBrandConfig extends ImageProps {
  brandName?: string;
}
export interface NavBarProps {
  brandConfig: NavBarBrandConfig;
  leftSection?: NavBarLeftSection;
  rightSection?: NavBarRightSection;
}

export interface ItemComponentConfig {
  [NavItemTypes.link]: ComponentType<LinkProps>;
  [NavItemTypes.button]: ComponentType<ButtonProps>;
}

export interface GetItemPropsForType {
  [NavItemTypes.link]: LinkProps;
  [NavItemTypes.button]: ButtonProps;
}
