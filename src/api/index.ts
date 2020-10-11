import { NextFunction, Router, Request, Response } from "express";

import users from "./users/index";
import auth from "./auth/index";
import messages from "./messages/index";

const router = Router();

router.use("/users", users);
router.use("/auth", auth);
router.use("/messages", messages);

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(400).send(err);
});

export default router;
