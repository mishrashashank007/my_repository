//import the model
const Todo = require("../model/Todo");

//create todo controller
const createTodo = async (req, res) => {
  try {
    // extract title and description from request body
    const { title, description } = req.body;
    // create a new todo object and save it to the database
    const newTodo = new Todo({ title, description });
    await newTodo.save();
    // send a json response with success flag
    res.status(200).json({
      success: true,
      message: "Todo created successfully",
      todo: newTodo,
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