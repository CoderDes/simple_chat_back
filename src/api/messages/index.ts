import { Router } from "express";
import { messageValidation } from "./messages.validation";
import { validate } from "../middlewares";
import {
  getAllMessages,
  postMessage,
  updateMessage,
  deleteMessage,
} from "./messages.controller";

const router = Router();

router.get("/all", getAllMessages);
router.post("/post", validate(messageValidation), postMessage);
router.put(`/update/:id`, validate(messageValidation), updateMessage);
router.delete("/delete", validate(messageValidation), deleteMessage);

export default router;
