process.loadEnvFile();

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.ENVIRONMENT || "development",
  DB_URL: process.env.ATLAS_CONNECTION_STRING,
};
