import { NextFunction, Request, Response } from "express";
import { compareSync } from "bcryptjs";
import UserModel from "../users/users.model";

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password }: { email: string; password: string } = req.body;
  try {
    const user: any = await UserModel.findOne({ email }).lean().exec();

    if (!compareSync(password, user.password)) {
      throw { message: "User is not found", status: 403 };
    }

    if (!user) {
      throw { message: "User is not found", status: 404 };
    }

    if (req.session !== null) {
      req.session.user = user;
    }

    res.json({ _id: user._id });
  } catch (err) {
    next(err);
  }
};
