import { Router } from "express";
import passport from "passport";
import { loginUser, checkSession } from "./auth.controller";
import { validate } from "../middlewares";
import { loginUserValidation } from "./auth.validation";

const router = Router();

router.post(
  "/login",
  validate(loginUserValidation),
  passport.authenticate("local"),
  loginUser,
);

router.get("/check-session", passport.authenticate("local"), checkSession);

export default router;
