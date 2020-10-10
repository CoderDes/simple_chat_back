import { Router } from "express";
import { registerUser, loginUser } from "./users.controller";
import { validate } from "../middlewares";
import { registerUserValidation } from "./users.validation";

const router = Router();

router.post("/login", loginUser);
router.post("/register", validate(registerUserValidation), registerUser);

export default router;
