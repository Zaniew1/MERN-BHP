import "dotenv/config";
const getEnv = (key: string, defaultVal?: string): string => {
  const value = process.env[key] || defaultVal;
  if (value === undefined) {
    throw new Error(`MIssing enviroment variable in .env file - ${key}`);
  }
  return value;
};

export const AUTH_USERNAME = getEnv("AUTH_USERNAME", "development");
export const AUTH_PASSWORD = getEnv("AUTH_PASSWORD", "000");
