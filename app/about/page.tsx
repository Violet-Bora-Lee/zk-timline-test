import React from "react";
import Menu from "@/components/Menu";

export default function AboutPage() {
  return (
    <main>
      <Menu />
      <section className="pb-2 min-h-screen">
        <article className="bg-white text-black p-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About This Project</h2>
          <p className="mb-6">
            This project is an open-source collaborative timeline of significant Zero Knowledge (zk) events. 
            The aim is to document the evolution of zk technology from its inception to current advancements, 
            and provide insights into the trajectory of zk research and applications.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Resources Used</h3>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>
              <a
                href="https://medium.com/@emilpepil/history-of-the-formation-of-zkp-151dd7001ffa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                History of the Formation of ZKP (Medium Article by Emil Pepil)
              </a>
            </li>
            <li>
              <a
                href="https://blog.lambdaclass.com/our-highly-subjective-view-on-the-history-of-zero-knowledge-proofs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                Our Highly Subjective View on the History of Zero Knowledge Proofs (LambdaClass Blog)
              </a>
            </li>
            <li>
              <a
                href="https://www.wisdom.weizmann.ac.il/~oded/PSX/zk-tut02v3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                Zero Knowledge Tutorial (Weizmann Institute)
              </a>
            </li>
            <li>
              <a
                href="https://nibnalin.me/assets/zk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                Zero Knowledge Proofs (Nalin Ranjan)
              </a>
            </li>
            <li>
              <a
                href="https://leastauthority.com/blog/pioneering-zero-knowledge-proofs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                Pioneering Zero Knowledge Proofs (Least Authority Blog)
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/KWS0InuJJrA?si=LqgY4C7nRtcvYUS3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                Zero Knowledge Proofs Explained (YouTube Video)
              </a>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">Acknowledgments</h3>
          <p className="mb-6">
            Thanks to 
            <a
              href="https://x.com/AnnaRRose"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              Anna Rose
            </a>, 
            <a
              href="https://x.com/nibnalin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mx-1"
            >
              Nibnalin
            </a>, 
            and 
            <a
              href="https://x.com/liz315"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              Liz Steininger
            </a> 
            for their help in sharing great resources.
          </p>

          <h3 className="text-2xl font-semibold mb-2">How to Contribute</h3>
          <p>
            If you would like to contribute to this timeline, please follow the instructions in our{" "}
            {/* TODO: update contributing.md link */}
            <a
              href="https://github.com/obadiaa/zktimeline/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Contributing Guide
            </a>. Contributions can include adding new events, improving the descriptions of existing events,
            or suggesting new features.
          </p>
        </article>
      </section>
    </main>
  );
}
