import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import User from './models/User.js';

dotenv.config();

const generateUniqueId = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `ECHO-${randomNum}`;
};

const run = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to DB');

        const pratyusha = await User.findOne({ where: { username: 'Pratyusha' } });
        if (pratyusha) {
            console.log('Pratyusha already exists in DB');
            process.exit(0);
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash('Pratyusha2026!', salt);

        let uniqueId = generateUniqueId();
        while (await User.findOne({ where: { uniqueId } })) {
            uniqueId = generateUniqueId();
        }

        await User.create({
            username: 'Pratyusha',
            password: passwordHash,
            role: 'Friend',
            uniqueId
        });

        console.log('Created Friend account: Pratyusha');
        process.exit(0);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

run();
