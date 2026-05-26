import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  message: { type: String, required: true },
  isApproved: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Message', MessageSchema);
