import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import User from './models/User.js';

dotenv.config();

// ==========================================
// EDIT YOUR CUSTOM USERNAMES & PASSWORDS HERE
// ==========================================

const adminAccount = { username: 'admin', password: 'Admin2026!' };

const friendAccounts = [
  { username: 'Adveth', password: 'Adveth1982!' },
  { username: 'Rohit', password: 'Rohit1111!' },
  { username: 'Shantanu', password: 'Shantanu2023!' },
  { username: 'Parth', password: 'Parth2023!' },
  { username: 'Bhageshree', password: 'Bhageshree2026!' },
  { username: 'Pari', password: 'Pari2026!' },
  { username: 'Abhii', password: 'Abhii2026!' },
  { username: 'Ashlesha', password: 'Ashlesha2026!' },
  { username: 'Samruddhi', password: 'Samruddhi2026!' },
  { username: 'Sahil', password: 'Sahil2026!' },
  { username: 'Ayushi', password: 'Ayushi2026!' },
  { username: 'Pranali', password: 'Pranali2026!' },
];

const generateUniqueId = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `ECHO-${randomNum}`;
};

const createAccount = async (username, password, role) => {
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  let uniqueId = generateUniqueId();
  while (await User.findOne({ where: { uniqueId } })) {
    uniqueId = generateUniqueId();
  }

  const newUser = await User.create({
    username,
    password: passwordHash,
    role,
    uniqueId
  });

  console.log(`Created ${role} account: ${username}`);
};

const seed = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL');
    
    await sequelize.sync({ force: true }); // This drops the tables and recreates them

    console.log('Cleared old users from the database.');

    // Create 1 Admin
    await createAccount(adminAccount.username, adminAccount.password, 'Admin');

    // Create 13 Friends
    for (const friend of friendAccounts) {
      await createAccount(friend.username, friend.password, 'Friend');
    }

    console.log('Finished seeding accounts.');
    console.log('Please change the default passwords if deployed to production!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding accounts:', err);
    process.exit(1);
  }
};

seed();
