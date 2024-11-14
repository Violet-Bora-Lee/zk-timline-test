import FloatingYearDisplay from './FloatingYearDisplay';
import TimelineItem from "./TimelineItem";
import { TIMELINE_DATA } from "@/constants/timeline";

const Timeline = () => {
  return (
    <section className="py-2 bg-white" id="timeline">
      <FloatingYearDisplay />
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />

            {/* Timeline dot */}
            <div className="absolute left-4 top-8 w-2.5 h-2.5 bg-customGray rounded-full transform -translate-x-1" />

            {/* Content */}
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItem
                key={index}
                isLeft={index % 2 === 0}
                title={item.title}
                date={item.date}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
