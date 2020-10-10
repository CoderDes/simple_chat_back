import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  text: String,
  author: {
    type: String,
    required: true,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: Date,
});

export default model("MessageSchema", MessageSchema);
