"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const pathname = usePathname();

  return (
    <section className="pt-20 pb-2 bg-black text-white" id="roadmap">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">
            Zero Knowledge (zk) Events Timeline
          </h2>
          <p className="font-semibold mb-4">
            {/* For larger screens, display as a single line */}
            <span className="hidden sm:inline">
              A collaborative open-source timeline of significant zk events. Contributions are welcome!
            </span>
            {/* For smaller screens, split into two lines */}
            <span className="inline sm:hidden">
              A collaborative open-source timeline of significant zk events.
              <br />
              Contributions are welcome!
            </span>
          </p>
          {/* Menu section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4 text-l md:text-xl text-customYellow font-semibold">
            {/* Always show Home */}
            <Link href="/" className="btn btn-primary">
              Home
            </Link>

            {/* Hide link if current path is /about */}
            {pathname !== '/about' && (
              <Link href="/about" className="btn btn-primary">
                About & Resources
              </Link>
            )}

            {/* Hide link if current path is /analysis */}
            {pathname !== '/analysis' && (
              <Link href="/analysis" className="btn btn-primary">
                Analysis
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
