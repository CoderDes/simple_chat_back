import { Router } from "express";
import { registerUser, getUserById } from "./users.controller";
import { validate } from "../middlewares";
import { registerUserValidation } from "./users.validation";

const router = Router();

router.post("/register", validate(registerUserValidation), registerUser);
router.get("/:id", getUserById);

export default router;
