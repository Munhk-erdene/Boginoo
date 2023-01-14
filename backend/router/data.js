import express from "express";
import {
  getAllDatas,
  createData,
  data,
  updateData,
  deleteData,
} from "../controller/data.js";

const router = express.Router();
router.get("/", getAllDatas);
router.post("/", createData);
router.get("/:id", data);
router.put("/:id", updateData);
router.delete("/:id", deleteData);
export default router;
