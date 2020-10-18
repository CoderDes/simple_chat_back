import { NextFunction, Router, Request, Response } from "express";
import passport from "passport";
import { Strategy } from "passport-local";
import { compareSync } from "bcryptjs";

import users from "./users/index";
import auth from "./auth/index";
import messages from "./messages/index";
import UserModel from "./users/users.model";

const router = Router();

router.use("/*", (req, res, next) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

passport.serializeUser((user: any, done: Function) => {
  console.log("SERIALIZE USER", user);
  done(null, user._id);
});

passport.deserializeUser(async (id: string, done: Function) => {
  try {
    const user = await UserModel.findById({ _id: id })
      .select("email")
      .lean()
      .exec();

    console.log("DESIRIALIZE USER", user);

    if (!user) {
      done(null, false);
    }
    done(null, user);
  } catch (err) {
    done(err, false);
  }
});

passport.use(
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req: Request, email: string, password: string, done: Function) => {
      try {
        const user: any = await UserModel.findOne({ email })
          .select("password")
          .lean()
          .exec();

        if (!user || !compareSync(password, user.password)) {
          done(null, false);
        }

        done(null, user);
      } catch (err) {
        done(err, false);
      }
    },
  ),
);

router.use(passport.initialize());
router.use(passport.session());

router.use("/users", users);
router.use("/auth", auth);
router.use("/messages", messages);

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(400).send(err);
});

export default router;
