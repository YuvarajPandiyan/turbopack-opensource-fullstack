"use client";

import { NavBar } from "@repo/ui";

import { HomePageLayoutProps } from "./Layout.interface";

export const HomePageLayout = ({
  children,
  brandConfig,
}: HomePageLayoutProps) => {
  return (
    <>
      <NavBar brandConfig={brandConfig} />
      {children}
    </>
  );
};
