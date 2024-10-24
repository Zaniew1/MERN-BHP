import "dotenv/config";
const getEnv = (key: string, defaultVal?: string): string => {
  const value = process.env[key] || defaultVal;
  if (value === undefined) {
    throw new Error(`MIssing enviroment variable in .env file - ${key}`);
  }
  return value;
};

export const MAILER_COMPANY_NAME = getEnv("MAILER_COMPANY_NAME", "BHP Project");
export const MAILER_DOMAIN_NAME = getEnv("MAILER_DOMAIN_NAME", "bhp-project.pl");
export const MAILER_STATUS = getEnv("MAILER_STATUS", "dev");

export const MAILER_PROD_USERNAME = getEnv("MAILER_PROD_USERNAME", "m.zaniewski1995@gmail.com");
export const MAILER_PROD_PASSWORD = getEnv("MAILER_PROD_PASSWORD", "0000");
export const MAILER_PROD_PORT = getEnv("MAILER_PROD_PORT", "587");
export const MAILER_PROD_HOST = getEnv("MAILER_PROD_HOST", "smtp.gmail.com");
export const MAILER_PROD_SERVICE = getEnv("MAILER_PROD_SERVICE", "gmail");
export const MAILER_PROD_FROM = getEnv("MAILER_PROD_FROM", "BHP_project@gmail.com");

export const MAILER_TEST_USERNAME = getEnv("MAILER_TEST_USERNAME", "0000");
export const MAILER_TEST_PASSWORD = getEnv("MAILER_TEST_PASSWORD", "0000");
export const MAILER_TEST_HOST = getEnv("MAILER_MAILTRAP_HOST", "sandbox.smtp.mailtrap.io");
export const MAILER_TEST_PORT = getEnv("MAILER_TEST_PORT", "2525");
export const MAILER_TEST_FROM = getEnv("MAILER_TEST_PORT", "sampleEmail@gmail.com");
export const MAILER_TEST_SERVICE = getEnv("MAILER_TEST_SERVICE", "mailtrap");

export const MAILER_WEBAPI_TOKEN = getEnv("MAILER_WEBAPI_TOKEN", "000");
export const SENDGRID_API_KEY = getEnv("SENDGRID_API_KEY", "000");
