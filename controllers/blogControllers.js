const asyncHandler = require("express-async-handler");
const blogService = require("../services/blogServices");

//Get blogs
//      /api/blogs
// const getBlogs = asyncHandler(async (req, res) => {
//   const blog = await blogService.getAllBlogs();
//   res.status(200).json(blog);
// });
/**
 * @author
 * @param
 * @
 */

const getBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//Create new blog
const createBlogs = asyncHandler(async (req, res) => {
  console.log("Request body is : ", req.body);
  const { image, heading, title, description } = req.body;
  try {
    if (!image || !heading || !title || !description) {
      res.status(400);
      return;
    }
    const blogData = { image, heading, title, description };
    const blog = await blogService.createNewBlog(blogData);

    res.status(201).json({status: "success", data: blog, message: "Blog posted successfully"});
  } catch (error) {
    console.error("Error creating a new blog: ", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { getBlogs, createBlogs };
