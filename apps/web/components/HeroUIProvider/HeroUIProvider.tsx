"use client";

import { HeroUIProvider } from "@heroui/react";

import { HeroUIProviderProps } from "./HeroUIProvider.interface";

export const HeroUIProviderWrapper = ({ children }: HeroUIProviderProps) => {
  return (
    <>
      <HeroUIProvider>{children}</HeroUIProvider>
    </>
  );
};
