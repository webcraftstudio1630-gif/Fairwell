import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const isExternalRender = process.env.DATABASE_URL && process.env.DATABASE_URL.includes('.render.com');
const requiresSSL = isProduction && isExternalRender;

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/farewell', {
  dialect: 'postgres',
  logging: false, // Set to console.log to see SQL queries
  dialectOptions: requiresSSL ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {}
});

export default sequelize;
