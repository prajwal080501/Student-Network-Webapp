import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (user) {
            res.status(400).json({
                code: 400,
                message: "User already exists",
                data: null
            })
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User(req.body);
            newUser.password = hashedPassword;
            await newUser.save();
            res.status(200).json({
                code: 200,
                message: "User created successfully",
                data: newUser
            })
        }
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message,
            data: null
        })
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({
            email
        });
        if (!user) {
            res.status(400).json({
                code: 400,
                message: "User not found",
                data: null
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({
                code: 400,
                message: "Invalid credentials",
                data: null
            })
        }
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        // remove password from response
        user.password = undefined;
        res.status(200).json({
            code: 200,
            message: "Login successful",
            data: {
                user,
                token
            }

        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message,
            data: null
        })
    }
}