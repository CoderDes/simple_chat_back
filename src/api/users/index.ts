import { Router } from "express";
import { registerUser } from "./users.controller";
import { validate } from "../middlewares";
import { registerUserValidation } from "./users.validation";

const router = Router();

router.post("/register", validate(registerUserValidation), registerUser);

export default router;
