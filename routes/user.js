import express from "express";
import { addRemoveFriend, deleteUser, getUser, getUserFriends } from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

// read
router.get("/:id", verifyToken, getUser);
router.get("/:id/followers", verifyToken, getUserFriends);
// update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend)
// delete
router.delete("/:id", verifyToken, deleteUser)
export default router;