import { NextFunction, Request, Response } from "express";

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user: any = req.user;

    if (user) {
      res.json({ _id: user._id });
    }
  } catch (err) {
    next(err);
  }
};

export const checkSession = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const user: any = req.user;
    console.log("CHECK SESSION", req.session);
    console.log("USER", user);
    if (user) {
      res.status(200).json({ _id: user._id });
    }
  } catch (err) {
    next(err);
  }
};
