"use client";

import React from "react";
import Menu from "@/components/Menu";
import dynamic from "next/dynamic";
import { FUNDING_DATA } from "@/data/funding";
import YearAnalysis from "@/components/YearAnalysis";

const FundingChart = dynamic(() => import("@/components/FundingChart"), {
  ssr: false,
});

export default function AnalysisPage() {
  return (
    <main>
      <Menu />
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Analysis Overview</h2>
          <p className="mb-8">
            On this page, we explore trends in the evolution of Zero Knowledge
            (zk) technologies, including metrics like the number of zk research
            papers published each year, the frequency of significant zk events,
            and the amount of funding raised by zk projects.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Evolution of ZK Applications
          </h2>
          <p className="mb-4">
            Explore how the zk landscape has evolved over time:
          </p>

          <YearAnalysis />

          <h2 className="text-3xl font-bold mt-12 mb-4">Key Metrics</h2>
          <h3 className="text-2xl font-bold mb-4">
            Amount of Funding Raised by zk Projects
          </h3>
          <div className="bg-white rounded-lg">
            <FundingChart data={FUNDING_DATA} />
          </div>
        </div>
      </section>
    </main>
  );
}
