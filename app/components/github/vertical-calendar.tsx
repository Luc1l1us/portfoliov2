"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { HeatmapChart } from "echarts/charts";
import {
  CalendarComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
import { GitContributionGraphProps } from "./type";
import ReactEChartsCore from "echarts-for-react/lib/core";

echarts.use([
  HeatmapChart,
  TooltipComponent,
  VisualMapComponent,
  CalendarComponent,
  SVGRenderer,
]);

export const VerticalCalender = ({ data }: GitContributionGraphProps) => {
  const startDate = data[0][0];
  const endDate = data[data.length - 1][0];
  const chartRef = useRef<ReactEChartsCore>(null);

  const option: echarts.EChartsCoreOption = {
    backgroundColor: "transparent",
    tooltip: {
      show: false,
    },
    visualMap: {
      show: false,
      min: 0,
      max: 20,
      inRange: {
        color: ["#999999", "#707070", "#505050", "#303030", "#111111"],
      },
      type: "piecewise",
      splitNumber: 5,
      orient: "vertical",
      pieces: [
        { min: 20 },
        { min: 10, max: 20 },
        { min: 3, max: 10 },
        { min: 1, max: 3 },
        { value: 0 },
      ],
    },
    calendar: {
      top: 30,
      left: 35,
      right: 5,
      cellSize: [20],
      range: [startDate, endDate],
      itemStyle: {
        borderWidth: 0,
        color: "transparent",
      },
      dayLabel: {
        nameMap: ["", "Mon", "", "Wed", "", "Fri", ""],
      },
      monthLabel: {
        nameMap: "en",
        margin: 10,
      },
      yearLabel: { show: false },
      splitLine: { show: false },
    },
    series: [
      {
        type: "heatmap",
        coordinateSystem: "calendar",
        calendarIndex: 0,
        itemStyle: {
          borderRadius: 6,
          borderWidth: 2,
          borderColor: "", //customize border color here
        },
        data: data,
      },
    ],
  };
  return (
    <div>
      <ReactEChartsCore ref={chartRef} option={option} echarts={echarts} />
    </div>
  );
};
