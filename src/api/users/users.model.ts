import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface User extends Document {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: { type: Date },
  },
  { collection: "users", timestamps: true },
);

UserSchema.pre<User>("save", function (next) {
  if (this.isNew || this.isModified()) {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  this.updatedAt = new Date();

  next();
});

export default model("UserModel", UserSchema);
