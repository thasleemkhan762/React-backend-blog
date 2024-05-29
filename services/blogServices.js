const Blogs = require("../models/blogModel");

// const getAllBlogs = async () => {
//     try{
//         const blog = await Blogs.find();
//     return blog;
//     }catch (error) {
//         throw new Error("Error fecting Blogs from the database");
//     }
// }

const getAllBlogs = async () => {
    try {
        const blogs = await Blogs.find();
        return blogs;
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error in getAllBlogs:", error);
        throw new Error(`Failed to fetch Blogs from the database: ${error.message}`);
    }
}


const createNewBlog = async (blogData) => {
    try{
        const blog = await Blogs.create(blogData);
        return blog;
    }catch (error) {
        console.error("Error creating a new blog: ", error);
        throw new Error ("Error  creating a new blog");
    }
};

module.exports = {
    getAllBlogs,
    createNewBlog
}