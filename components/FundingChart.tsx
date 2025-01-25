import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { FundingRoundItem } from "@/types/funding";

interface Props {
  data: FundingRoundItem[];
}

const FundingChart = ({ data }: Props) => {
  const chartData = useMemo(() => {
    const yearlyData = data.reduce((acc, item) => {
      const year = item.year.toString();
      acc[year] = (acc[year] || 0) + item.fundraise_amount;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(yearlyData)
      .map(([year, amount]) => ({
        year,
        amount,
      }))
      .sort((a, b) => a.year.localeCompare(b.year));
  }, [data]);

  const generateTicks = useMemo(() => {
    const maxAmount = Math.max(...chartData.map((item) => item.amount));
    const roundedMax = Math.ceil(maxAmount / 100) * 100;
    return Array.from({ length: roundedMax / 100 + 1 }, (_, i) => i * 100);
  }, [chartData]);

  return (
    <div className="w-full max-w-[800px] h-[400px] mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 50, bottom: 30 }}
        >
          <CartesianGrid horizontal={true} vertical={false} stroke="#e5e5e5" />
          <XAxis
            dataKey="year"
            label={{ value: "Year", position: "bottom" }}
            stroke="#e5e5e5"
            tick={{ fill: "#666" }} // 2016, 2018, ... string color
            tickLine={false}
          />
          <YAxis
            label={{
              value: "Amount Raised ($M)",
              angle: -90,
              position: "left",
              offset: 10,
              style: {
                textAnchor: "middle",
                fill: "#666",
              },
            }}
            dx={-10}
            ticks={generateTicks}
            interval={0}
            tickCount={11}
            tickLine={false}
            tick={{ fill: "#666" }}
            stroke="#e5e5e5"
          />
          <Tooltip />
          <Legend verticalAlign="top" align="center" height={36} />
          <Bar
            name={"Funding Raised ($M)"}
            dataKey="amount"
            fill="rgba(54, 162, 235, 0.7)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FundingChart;
