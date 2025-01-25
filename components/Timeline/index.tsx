import FloatingYearDisplay from './FloatingYearDisplay';
import TimelineItem from "./TimelineItem";
import { TIMELINE_DATA } from "@/data/timeline";

const Timeline = () => {
  // Sort TIMELINE_DATA by date
  const sortedTimelineData = TIMELINE_DATA.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <section className="py-2 bg-white" id="timeline">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />

            {/* Timeline dot */}
            <div className="absolute left-4 top-8 w-2.5 h-2.5 bg-customGray rounded-full transform -translate-x-1" />

            {/* Content */}
            {sortedTimelineData.map((item, index) => {
              // Calculate the time difference with the previous item
              let marginTop = '20px'; // Default margin
              if (index > 0) {
                const prevDate = new Date(sortedTimelineData[index - 1].date);
                const currDate = new Date(item.date);
                const timeDifference = currDate.getTime() - prevDate.getTime();
                const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

                // Reduce margin if the items are in the same year
                if (prevDate.getFullYear() === currDate.getFullYear()) {
                  marginTop = `${daysDifference * 0.2}px`; // Reduced margin for the same year
                } else {
                  marginTop = `${daysDifference * 0.5}px`; // Default margin for different years
                }
              }

              return (
                <TimelineItem
                  key={index}
                  isLeft={index % 2 === 0}
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  link={item.link}
                  marginTop={marginTop}
                />
              );
            })}
          </div>
        </div>
      </div>
      <FloatingYearDisplay />
    </section>
  );
};

export default Timeline;
