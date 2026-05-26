import mongoose from 'mongoose';

const FriendSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String, required: true },
  memories: [{ type: String }],
  quote: { type: String, required: true },
  image: { type: String, required: true },
  socials: {
    instagram: { type: String },
    linkedin: { type: String },
    github: { type: String }
  }
}, { timestamps: true });

export default mongoose.model('Friend', FriendSchema);
