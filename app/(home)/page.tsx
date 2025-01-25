import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <section className="py-20 bg-black text-white" id="roadmap">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Zero Knowledge (zk) Events Timeline
            </h2>
            <p className="font-semibold mb-2">
              A collaborative open-source timeline of significant zk events.
              Contributions are welcome!
            </p>
          </div>
        </div>
      </section>
      <Timeline />
    </main>
  );
}
