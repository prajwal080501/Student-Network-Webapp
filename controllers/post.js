import Comment from "../models/Comments.js"
import Post from "../models/Post.js"
import User from "../models/User.js"
export const createPost = async (req, res) => {
    try {
        const { userId, text, postPicture } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            ...req.body,
            username: user.username,
            profilePicture: user.profilePicture
        })
        const post = await newPost.save();
        res.status(200).json({
            code: 200,
            message: "Post has been created",
            data: post
        })
    } catch (error) {
        res.status(404).json({
            code: 409,
            message: error.message,
            data: null
        })
    }
}
export const getFeedPosts = async (req, res) => {
    // get posts only for the person who is logged in and followed by user
    const { id } = req.params;
    const user = await User.findById(id);
    const posts = await Post.find({
        userId: {
            $in: user.followings
        }
    }).sort({ createdAt: -1 });
    try {
        res.status(200).json({
            code: 200,
            message: "Success",
            data: posts
        })
    } catch (error) {
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}

export const getUserPosts = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    const posts = await Post.find({
        userId: id
    }).sort({ createdAt: -1 });
    try {
        res.status(200).json({
            code: 200,
            message: "Success",
            data: posts
        })
    }
    catch (error) {
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        // if (isLiked) {
        //   post.likes.delete(userId);
        // } else {
        //   post.likes.set(userId, true);
        // }

        // const updatedPost = await Post.findByIdAndUpdate(
        //   id,
        //   { likes: post.likes },
        //   { new: true }
        // );

        // res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}
export const deletePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    try {
        if (req.body.userId === post.userId) {
            await Post.findByIdAndDelete(id);
        }
        else {
            res.status(403).json({
                code: 403,
                message: "You can delete only your post",
                data: null
            })
        }
        res.status(200).json({
            code: 200,
            message: "Post has been deleted",
            data: null
        })
    } catch (error) {
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}
export const updatePost = async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById(id);
    try{
        if(req.body.userId === post.userId){
            await Post.findByIdAndUpdate(id, {
                text: req.body.text,
                postPicture: req.body.postPicture
            })
            res.status(200).json({
                code: 200,
                message: "Post has been updated",
                data: null
            })
        }
        else{
            res.status(403).json({
                code: 403,
                message: "You can update only your post",
                data: null
            })
        }
    }
    catch(error){
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}

export const addComment = async (req, res) => {
    const { userId } = req.body;
    const { postId } = req.body;
    const user = await User.findById(userId);
    const post = await Post.findById(postId);

    try {
        const newComment = new Comment({
            ...req.body,
            username: user.username,
            profilePicture: user.profilePicture
        })
        await newComment.save();

        res.status(200).json({
            code: 200,
            message: "Comment has been added",
            data: newComment
        })
    } catch (error) {
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}

export const getComment = async (req, res) => {
    const { postId } = req.body;
    try {
        const comments = await Comment.find({
            postId: postId
        }).sort({ createdAt: -1 });
        res.status(200).json({
            code: 200,
            message: "Success",
            data: comments
        })
    } catch (error) {
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}
