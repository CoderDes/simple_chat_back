import { Router } from "express";
import controller from "./users.controller";

const router = Router();

router.post("/users", controller);

export default router;
