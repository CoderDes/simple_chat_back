import { Router } from "express";
import {
  getAllMessages,
  postMessage,
  updateMessage,
  deleteMessage,
} from "./messages.controller";

const router = Router();

router.get("/all", getAllMessages);
router.post("/post", postMessage);
router.put("/update", updateMessage);
router.delete("/delete", deleteMessage);

export default router;
