import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

const PersonalNote = sequelize.define('PersonalNote', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  content: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  }
}, {
  timestamps: true,
});

// Relationships
PersonalNote.belongsTo(User, { as: 'Sender', foreignKey: 'userId' });
PersonalNote.belongsTo(User, { as: 'Recipient', foreignKey: 'recipientId' });
PersonalNote.belongsToMany(User, { through: 'NoteLikes', as: 'Likes' });

export default PersonalNote;
