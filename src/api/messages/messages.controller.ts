import { NextFunction, Request, Response } from "express";
import MessageModel from "./messages.model";

export const postMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { text, author }: { text: string; author: string } = req.body;

    const user: any = req.session?.user;

    if (author != user.email) {
      throw { message: `User ${author} IS NOT authorized` };
    } else {
      console.log(`User ${author} is authorized`);
    }

    const message = new MessageModel({ text, author });
    await message.save();

    res.send({ message: "Message posted successfully", id: message._id });
  } catch (e) {
    next(e);
  }
};

export const getAllMessages = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user: any = req.session?.user;

    if (!user) {
      throw { message: "You need to authorize to update message" };
    }

    const allMessages: Array<object> = await MessageModel.find({})
      .lean()
      .exec();

    res.status(200).json(allMessages);
  } catch (err) {
    next(err);
  }
};

export const updateMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { text }: { text: string } = req.body;
  const id: string = req.params.id;

  try {
    const user: any = req.session?.user;

    if (!user) {
      throw { message: "You need to authorize to get messages" };
    }

    await MessageModel.updateOne(
      { _id: id },
      { text: text, updatedAt: Date.now() },
      { multipleCastError: true },
    );

    res.status(200).send({ message: "Message updated successfully", id: id });
  } catch (err) {
    next(err);
  }
};

export const deleteMessage = async (req: Request, res: Response) => {};
