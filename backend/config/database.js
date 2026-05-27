import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/farewell';

// Auto-correct the internal URL to the external URL if it is missing the full hostname
// This fixes ENOTFOUND errors caused by cross-region Render deployments or cached system environment variables.
if (dbUrl.includes('dpg-d8as83b7uimc73ck66dg-a') && !dbUrl.includes('.render.com')) {
    dbUrl = dbUrl.replace('dpg-d8as83b7uimc73ck66dg-a', 'dpg-d8as83b7uimc73ck66dg-a.singapore-postgres.render.com');
}

const isProduction = process.env.NODE_ENV === 'production';
const isExternalRender = dbUrl.includes('.render.com');
const requiresSSL = isExternalRender; // Always require SSL when connecting from outside Render

const sequelize = new Sequelize(dbUrl, {
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
