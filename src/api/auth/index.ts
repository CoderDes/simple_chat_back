import { Router } from "express";
import { loginUser } from "./auth.controller";
import { validate } from "../middlewares";
import { loginUserValidation } from "./auth.validation";

const router = Router();

router.post("/login", validate(loginUserValidation), loginUser);

export default router;
