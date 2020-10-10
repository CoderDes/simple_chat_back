import joi from "joi";
import { Segments } from "celebrate";

export const registerUserValidation = {
  [Segments.BODY]: {
    email: joi.string().email().trim(true).required,
    password: joi.string().token().min(6).max(100).trim(true).required,
  },
};
