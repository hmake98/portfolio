// src/app/page.tsx
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "@/components/Hero";

// Lazy load non-critical components
const LazyAbout = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
  ssr: true,
});

const LazySkills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
  ssr: true,
});

const LazyProjects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
  ssr: true,
});

const LazyExperience = dynamic(() => import("@/components/Experience"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
  ssr: true,
});

const LazyContact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="min-h-screen bg-bg-primary" />}>
        <LazyAbout />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-bg-primary" />}>
        <LazySkills />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-bg-primary" />}>
        <LazyProjects />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-bg-primary" />}>
        <LazyExperience />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-bg-primary" />}>
        <LazyContact />
      </Suspense>
    </>
  );
}
