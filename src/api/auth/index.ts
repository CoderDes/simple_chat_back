import { Router } from "express";
import { loginUser, checkSession } from "./auth.controller";
import { validate } from "../middlewares";
import { loginUserValidation } from "./auth.validation";

const router = Router();

router.post("/login", validate(loginUserValidation), loginUser);
router.get("/check-session", checkSession);

export default router;
