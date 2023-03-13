import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.proteomics.uni-freiburg.de%2Fimages%2Fteam%2Fportrait-dummy.png%2Fportrait-dummy.png&f=1&nofb=1&ipt=6b98e9009de5eb67693b44f9e31feb08c78712f20b7e5d28cded8dc4e608386b&ipo=images"
    },
    followings: {
        type: Array,
    },
    followers: {
        type: Array,
    },
    role: {
        type: String,
        default: "user"
    },
    skills: {
        type: Array,
    },
    degree: {
        type: String,
    },
    bio: {
        type: String,
    },
    passingYear: {
        type: String,
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema);

export default User;
