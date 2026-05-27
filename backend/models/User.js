import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  password: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true 
  },
  role: { 
    type: DataTypes.ENUM('Admin', 'Friend'), 
    defaultValue: 'Friend' 
  },
  uniqueId: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true 
  },
  isBanned: { 
    type: DataTypes.BOOLEAN, 
    defaultValue: false 
  }
}, {
  timestamps: true,
});

export default User;
