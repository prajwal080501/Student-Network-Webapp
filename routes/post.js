import express from "express";
import { getFeedPosts, getUserPosts, likePost, deletePost, updatePost, addComment, getComment } from "../controllers/post.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// read
router.get("/:id", verifyToken, getFeedPosts);
router.get("/:id/userposts", verifyToken, getUserPosts);
// update
router.patch("/:id/like", verifyToken, likePost);
router.put("/:id", verifyToken, updatePost);
// delete
router.delete("/:id", verifyToken, deletePost);

// comments
router.post("/comment", verifyToken, addComment);
router.get("/comment", getComment);

export default router;