import express from "express";
import {
  getAllDatas,
  createData,
  data,
  updateData,
  deleteData,
  getMail,
} from "../controller/data.js";
const router = express.Router();
import { checkToken } from "../middleware/middleware.js";
router.route("/").get(getAllDatas).post(getMail);
router.route("/:id").get(checkToken, data).put(updateData).delete(deleteData);
router.post("/Post", createData);

export default router;
