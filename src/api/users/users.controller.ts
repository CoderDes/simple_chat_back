import { NextFunction, Request, Response } from "express";
import UserModel from "./users.model";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password }: { email: string; password: string } = req.body;

    const user = new UserModel({ email, password });
    await user.save();

    res.send({ message: "user created successfully", id: user._id });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req: Request, res: Response) => {};
