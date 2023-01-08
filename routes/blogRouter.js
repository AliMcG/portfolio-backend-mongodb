import express from "express";
import { getAllBlogs, createNewBlog, getBlogsById } from "../controllers/blogController.js";

const router = express.Router()

router.get("/", (req, res) => {
  res.json("Hello from blogs")
})
router.get("/blogs-data/:id", getBlogsById)

router.get("/blogs-data", getAllBlogs)

router.post("/blogs-data", createNewBlog)

router.delete("/", (req, res) => {
  res.json("Nothing to delete")
})

export default router