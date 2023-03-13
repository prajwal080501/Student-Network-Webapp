import User from "../models/User.js"
export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.params.id
        })
        if (!user) {
            res.status(404).json({
                code: 404,
                message: "User does not exist",
                data: null
            })
        }
        res.status(200).json({
            message: "Success",
            data: user
        })
    } catch (error) {
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}

export const getUserFriends = async (req, res) => {
    // function to get followers of a user whose id is passed in the url'
    try {
        const user = await User.findById(req.params.id);
        const friends = user.followers
        let friendsList = [];
        for (let i = 0; i < friends.length; i++) {
            // get username and profile picture of each follower
            const friend = await User.findById(friends[i]);
            friendsList.push({
                username: friend.username,
                profilePicture: friend.profilePicture
            })
        }
        res.status(200).json({
            code: 200,
            message: "Success",
            data: friendsList
        })
    } catch (error) {
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}

export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (!user.followings.includes(friendId)) {
            await user.updateOne({
                $push: {
                    followings: friendId
                }
            })
            await friend.updateOne({
                $push: {
                    followers: id
                }
            })
            res.status(200).json({
                code: 200,
                message: "User has been followed",
                data: null
            })
        }
        else {
            await user.updateOne({
                $pull: {
                    followings: friendId
                }
            })
            await friend.updateOne({
                $pull: {
                    followers: id
                }
            })
            res.status(200).json({
                code: 200,
                message: "User has been unfollowed",
                data: null
            })
        }

        await user.save();
    } catch (error) {
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        // check if user id and passed id match
       if (req.body.userId === id || req.body.isAdmin) {
            await User.findByIdAndDelete(id);
            res.status(200).json({
                code: 200,
                message: "User has been deleted",
                data: null
            })
        }
        else {
            res.status(403).json({
                code: 403,
                message: "You can only delete your account",
                data: null
            })
        }
    }
    catch (error) {
        res.status(404).json({
            code: 404,
            message: error.message,
            data: null
        })
    }
}