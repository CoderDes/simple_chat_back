import { Router } from "express";

import auth from "../auth/index";

const router = Router();

router.use("/auth", auth);

export default router;
