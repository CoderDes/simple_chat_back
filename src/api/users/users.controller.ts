import { Request, Response } from "express";
import UserModel from "./users.model";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = new UserModel({ email, password });
    await user.save();

    res.send({ message: "user created successfully", id: user._id });
  } catch (err) {
    res.send("Fail " + err);
  }
};

export const loginUser = async (req: Request, res: Response) => {};
