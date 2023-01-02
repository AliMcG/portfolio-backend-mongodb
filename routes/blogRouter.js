import express from "express";
import { getAllBlogs, createNewBlog } from "../controllers/projectDataController.js";

const router = express.Router()

router.get("/", (req, res) => {
  res.json("Hello from project")
})
router.get("/blogs-data", getAllBlogs)

router.post("/blogs-data", createNewBlog)

router.delete("/", (req, res) => {
  res.json("Nothing to delete")
})

export default router