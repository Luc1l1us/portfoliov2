export type ContributionEntry = [
  string, 
  number,
];

export type DevelopmentActivity = {
  totalContribution: number,
  contributions: ContributionEntry[],
}