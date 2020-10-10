import { NextFunction, Request, Response } from "express";
import MessageModel from "./messages.model";

export const postMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { text, author }: { text: string; author: string } = req.body;

    const message = new MessageModel({ text, author });
    await message.save();

    res.send({ message: "Message posted successfully", id: message._id });
  } catch (e) {
    next(e);
  }
};

export const getAllMessages = async (req: Request, res: Response) => {};

export const updateMessage = async (req: Request, res: Response) => {};

export const deleteMessage = async (req: Request, res: Response) => {};
