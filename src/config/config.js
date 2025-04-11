import dotenv from "dotenv";
const env = dotenv.config().parsed;

const config = {
  port: env.PORT,
  dbUrl: env.DATABASE_URL,
  jwtSecret: env.JWT_SECRET,
};

export default config;
