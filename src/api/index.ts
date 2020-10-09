import { Router } from "express";

import users from "./users/index";
import auth from "./auth/index";
import messages from "./messages/index";

const router = Router();

router.use("/users", users);
router.use("/auth", auth);
router.use("/messages", messages);

export default router;
