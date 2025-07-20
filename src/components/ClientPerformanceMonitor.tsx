"use client";

import dynamic from "next/dynamic";

// Dynamically import PerformanceMonitor with no SSR
const PerformanceMonitor = dynamic(() => import("./PerformanceMonitor"), {
  ssr: false,
});

const ClientPerformanceMonitor: React.FC = () => {
  // Only render in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return <PerformanceMonitor />;
};

export default ClientPerformanceMonitor; 
