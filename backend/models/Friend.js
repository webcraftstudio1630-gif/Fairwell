import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Friend = sequelize.define('Friend', {
  id: { 
    type: DataTypes.STRING, 
    primaryKey: true 
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  role: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  description: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  memories: { 
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: []
  },
  quote: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  image: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  instagram: { type: DataTypes.STRING },
  linkedin: { type: DataTypes.STRING },
  github: { type: DataTypes.STRING }
}, {
  timestamps: true,
});

export default Friend;
