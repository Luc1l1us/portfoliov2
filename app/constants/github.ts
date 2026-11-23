import { requireEnvVar } from "../utils/requireEnvVar";

export const GITHUB_USERNAME = requireEnvVar(process.env.GITHUB_USERNAME, 'GITHUB_USERNAME');
export const GITHUB_TOKEN = requireEnvVar(process.env.GITHUB_TOKEN, 'GITHUB_TOKEN');