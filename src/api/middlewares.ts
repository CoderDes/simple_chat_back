import { celebrate } from "celebrate";
import { Request, Response, NextFunction } from "express";

export const validate = (schema: object) => {
  return (req: Request, res: Response, next: NextFunction) => {
    celebrate(schema, {
      abortEarly: false,
      allowUnknown: false,
      stripUnknown: {
        objects: true,
      },
    })(req, res, next);
  };
};
