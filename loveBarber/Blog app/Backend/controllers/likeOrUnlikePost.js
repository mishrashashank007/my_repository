const Blog = require("../model/Blog");

const reactBlog = async (req, res) => {
  try {
    const { action } = req.body; // "like" or "unlike"
    const userId = req.user.id;  // coming from auth middleware
    const blogId = req.params.id;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    const alreadyLiked = blog.likedBy.includes(userId);
    const alreadyUnliked = blog.unlikedBy.includes(userId);

    if (action === "like") {
      if (alreadyLiked) {
        // undo like
        blog.likedBy.pull(userId);
      } else {
        // switch/unlike removal + add like
        if (alreadyUnliked) blog.unlikedBy.pull(userId);
        blog.likedBy.push(userId);
      }
    }

    if (action === "unlike") {
      if (alreadyUnliked) {
        // undo unlike
        blog.unlikedBy.pull(userId);
      } else {
        // switch/like removal + add unlike
        if (alreadyLiked) blog.likedBy.pull(userId);
        blog.unlikedBy.push(userId);
      }
    }

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Reaction updated successfully",
      likes: blog.likedBy.length,
      unlikes: blog.unlikedBy.length,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = reactBlog;
