import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/post.js"
import commentRoutes from "./routes/comment.js"
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/post.js";
import { verifyToken } from "./middleware/auth.js";
// Config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
}))
app.use(morgan("common"))
app.use(bodyParser.json({
    limit: "50mb",
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true
}));

app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "/public/assets")));

// File Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/assets");
    }
});

const upload = multer({
    storage: storage
});

// Routes
app.post("/api/auth/register", upload.single("profilePicture"), register);
app.post("/api/posts", verifyToken, upload.single("postPicture"), createPost);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Mongo Connected");
}
).catch((err) => {
    console.log(err);
}
);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
}
);

