"use client";

import { LandingPageNavbar } from "../components/LandingPageNavbar";

export default function RootApp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <LandingPageNavbar />
    </div>
  );
}
