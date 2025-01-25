import React, { memo, useState } from "react";
import { yearMaps } from "@/data/yearMaps";

function YearAnalysis() {
  const [activeYear, setActiveYear] = useState<string | null>(null);

  return (
    <div className="bg-white text-black rounded-lg p-6">
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.keys(yearMaps).map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-4 py-2 rounded ${
              activeYear === year
                ? "bg-gray-800 text-customYellow"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {activeYear && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-2xl font-bold mb-4">
            {yearMaps[activeYear].title}
          </h3>
          {yearMaps[activeYear].description ? (
            <p>{yearMaps[activeYear].description}</p>
          ) : (
            yearMaps[activeYear].categories &&
            Object.entries(yearMaps[activeYear].categories).map(
              ([category, items]) => (
                <div key={category} className="mb-4">
                  <h4 className="font-bold mb-2">{category}</h4>
                  <ul className="list-disc list-inside">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            )
          )}
        </div>
      )}

      <p className="mt-4 text-sm text-gray-600">
        Source: Anna Rose&apos;s Presentation at ZkSummit12.{" "}
        <a
          href="https://www.youtube.com/watch?v=KWS0InuJJrA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Watch Presentation
        </a>
        .{" "}
        <a
          href="https://x.com/AnnaRRose"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Anna Rose&apos;s Twitter
        </a>
      </p>
    </div>
  );
}

export default memo(YearAnalysis);
