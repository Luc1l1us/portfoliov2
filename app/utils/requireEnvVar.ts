export const requireEnvVar = (value: string | undefined, key: string): string => {
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is missing and is required`);
  }
  return value;
}