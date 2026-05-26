import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

// ==========================================
// EDIT YOUR CUSTOM USERNAMES & PASSWORDS HERE
// ==========================================

const adminAccount = { username: 'admin', password: 'adminpass' };

const friendAccounts = [
  { username: 'Adveth', password: 'advethpass' },
  { username: 'Rohit', password: 'gym boy' },
  { username: 'Shantanu', password: 'ladki baaz' },
  { username: 'Parth', password: 'password' },
  { username: 'Bhageshree', password: 'iphone' },
  { username: 'Pari', password: 'bachhi' },
  { username: 'Abhii', password: 'nunu' },
  { username: 'Ashlesha', password: 'matchis chi kadi' },
  { username: 'Samruddhi', password: 'roadroller' },
  { username: 'Pratyusha', password: 'thanda pani' },
  { username: 'Sahil', password: 'shreya' },
  { username: 'Ayushi', password: 'half day' },
  { username: 'Pranali', password: 'nagin' },
];


const generateUniqueId = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `ECHO-${randomNum}`;
};

const createAccount = async (username, password, role) => {
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  let uniqueId = generateUniqueId();
  while (await User.findOne({ uniqueId })) {
    uniqueId = generateUniqueId();
  }

  const newUser = new User({
    username,
    password: passwordHash,
    role,
    uniqueId
  });

  await newUser.save();
  console.log(`Created ${role} account: ${username}`);
};

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear old users so we only have exactly these 14 accounts
    await User.deleteMany({});
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
