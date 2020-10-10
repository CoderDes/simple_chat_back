import joi from "joi";
import { Segments } from "celebrate";

export const messageValidation = {
  [Segments.BODY]: {
    text: joi.string().required().error(new Error("Error with text")),
    author: joi.string().required().error(new Error("Error with author")),
  },
};
