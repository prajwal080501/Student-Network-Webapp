import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    profilePicture: {
        type: String,
        default: ""
    },
    text: {
        type: String,
    },
    postPicture: {
        type: String,
        default: ""
    },
    likes: {
        type: Map,
        of: Boolean,
      },
}, {
    timestamps: true
})

const Post = mongoose.model("Post", PostSchema)

export default Post