import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";

// Add a Comment
const addComment = async (req, res) => {
  try {
    const { text, blogId } = req.body;
    const blogPost = await Blog.findById(blogId);
    if (!blogPost) return res.status(404).json({ error: "Blog not found" });

    const comment = new Comment({ text, blog: blogId, user: req.user._id });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    if (!blogId) return res.status(404).json({ error: "Blog not found" });
    const comments = await Comment.find({ blog: blogId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a Comment
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    if (comment.user.toString() !== req.user._id)
      return res.status(403).json({ error: "Not authorized" });

    await comment.deleteOne();
    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export { addComment, getCommentsByBlog, deleteComment };
