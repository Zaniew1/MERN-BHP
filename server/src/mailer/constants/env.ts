import "dotenv/config";
const getEnv = (key: string, defaultVal?: string): string => {
  const value = process.env[key] || defaultVal;
  if (value === undefined) {
    throw new Error(`MIssing enviroment variable in .env file - ${key}`);
  }
  return value;
};

export const MAILER_STATUS = getEnv("MAILER_STATUS", "dev");
export const MAILER_USERNAME = getEnv("MAILER_USERNAME", "m.zaniewski1995@gmail.com");
export const MAILER_PASSWORD = getEnv("MAILER_PASSWORD", "0000");
export const MAILER_PORT = getEnv("MAILER_PORT", "587");
export const MAILER_HOST = getEnv("MAILER_PORT", "smtp.gmail.com");
export const MAILER_SERVICE = getEnv("MAILER_SERVICE", "gmail");
export const MAILER_FROM = getEnv("MAILER_FROM", "BHP_project@gmail.com");
