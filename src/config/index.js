import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 8000,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};

export default config;
