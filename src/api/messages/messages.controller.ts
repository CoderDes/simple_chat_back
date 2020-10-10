import { Request, Response } from "express";
import MessageModel from "./messages.model";

export const postMessage = async (req: Request, res: Response) => {
  const { text, author }: { text: string; author: string } = req.body;

  try {
    const message = new MessageModel({ text, author });
    await message.save();

    res.send({ message: "Message posted successfully", id: message._id });
  } catch (err) {
    res.send({ message: "Failed to post message" });
    new Error(err);
  }
};

export const getAllMessages = async (req: Request, res: Response) => {};

export const updateMessage = async (req: Request, res: Response) => {};

export const deleteMessage = async (req: Request, res: Response) => {};
