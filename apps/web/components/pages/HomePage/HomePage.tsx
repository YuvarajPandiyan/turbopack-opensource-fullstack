"use client";

import { HomePageLayout } from "./Layout";
import { HomePageWithNavBarProps } from "./types";

const HomePage = () => {
  return <div>Home</div>;
};

export const HomePageWithNavBar = ({
  brandConfig,
}: HomePageWithNavBarProps) => {
  return (
    <>
      <HomePageLayout brandConfig={brandConfig}>
        <HomePage />
      </HomePageLayout>
    </>
  );
};
