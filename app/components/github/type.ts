export interface GitContributionGraphProps {
  data: HeatMapEntry[];
}

export type HeatMapEntry = [
  string,
  number,
]