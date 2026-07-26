//import the model
const Todo = require("../model/Todo");

//create blog controller
const createBlog = async (req, res) => {
  try {
    // extract title and content from request body
    const { title, content } = req.body;
    // create a new blog object and save it to the database
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    // send a json response with success flag
    res.status(200).json({
      success: true,
      message: "Blog created successfully",
      blog: newBlog,
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
module.exports = createTodo;