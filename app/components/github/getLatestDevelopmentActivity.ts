import { cacheLife } from "next/cache";
import { GITHUB_USERNAME, GITHUB_TOKEN } from "../../constants/github";
import { ContributionEntry, DevelopmentActivity } from "./types";
import { graphql } from "@octokit/graphql";

export const getLatestDevelopmentActivity = async (): Promise<DevelopmentActivity> | null => {
  try {
    const response = await graphql<{
      user: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: number;
            weeks: {
              contributionDays: {
                contributionCount: number,
                date: string
              }[]
            }[],
          }
        }
      }
    }>(
      `
      query ($userName: String!) {
        user(login: $userName) {
          contributionsCollection {
            contributionCalendar {
            totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
      `,
      {
        userName: GITHUB_USERNAME,
        headers: {
          authorization: `token ${GITHUB_TOKEN}`
        }
      }
    );

    const contributionCalendar = response.user.contributionsCollection.contributionCalendar;
    const contributions: ContributionEntry[] = contributionCalendar.weeks.flatMap((week) => 
      week.contributionDays.map((day) => [day.date, day.contributionCount] as ContributionEntry),
    );

    return {
      totalContribution: contributionCalendar.totalContributions,
      contributions,
    };
  } catch (error) {
    console.warn('getLatestDevelopmentActivity: Error while fetching latest development data', error);
    return null;
  }
}

export const getCachedLatestDevelopmentActivity = async () => {
  'use cache';
  cacheLife('alwaysCheck15m')

  return getLatestDevelopmentActivity();
}