import Blogs from "../models/blogSchema.js"

// GET / Finds ALL project data and sorts it in order of most recent list.
export const getAllBlogs = async (req, res) => {
  const blogData = await Blogs.find().sort({createdAt: -1})
  console.log(blogData)
  res.status(200).json(blogData)
}

// POST / Creates a new item document in the database with required "key:value" pairs (i.e. username, item).
export const createNewBlog = async (req, res) => {
  const {title, description, image} = req.body
  try{
      const newBlog= await Blogs.create({title, description, image})
      res.status(200).json(newBlog)
  } catch (error) {
      res.status(404).json({error: error.message})
  }
}