import { FC } from "react";
import { TimelineItemProps } from "@/types/timeline";

const TimelineItem: FC<TimelineItemProps> = ({
  isLeft,
  title,
  date,
  description,
  link
}) => {
  return (
    <div className="relative mb-16 timeline-item" data-date={date}>
      <div className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'} w-full`}>
        <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
          <div className="bg-customWhite p-6 rounded-[14px] shadow-lg relative hover:-translate-y-1 transition-transform duration-300 border border-solid border-transparent">
            {/* 타임라인 점 */}
            <div 
              className={`absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-customGray rounded-full hidden md:block
                ${isLeft 
                  ? 'right-0 md:right-[-32px] translate-x-1/2' 
                  : 'left-0 md:left-[-32px] -translate-x-1/2'
                }`}
            />
            
            <h3 className="text-black text-xl font-bold mb-2">{title}</h3>
            <p className="text-customGray mb-3">Date: {date}</p>
            <p className="text-customGray mb-4">{description}</p>
            {link && <a href={link} className="text-blue-500 hover:underline">Read more</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
