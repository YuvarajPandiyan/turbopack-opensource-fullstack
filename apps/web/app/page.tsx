"use client";
import { LandingPageNavbar } from "../components/LandingPageNavbar";
import { RootProvider } from "../components/Root";

export default function RootApp() {
  return (
    <RootProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <LandingPageNavbar />
      </div>
    </RootProvider>
  );
}
