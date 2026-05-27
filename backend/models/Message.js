import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  email: { 
    type: DataTypes.STRING 
  },
  message: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  isApproved: { 
    type: DataTypes.BOOLEAN, 
    defaultValue: true 
  }
}, {
  timestamps: true,
});

export default Message;
