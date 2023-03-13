import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    }
}, {
    timestamps: true
})


const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;