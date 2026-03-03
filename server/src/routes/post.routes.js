import express from "express";
import { createPost, deletePost, getPosts, getPostsByUser, getSinglePost, getTopPostsOfWeek, toggleLike } from "../controllers/post.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const postRouter = express.Router();

postRouter.post("/", authMiddleware, createPost);
postRouter.get("/", getPosts);
postRouter.get("/top-week", getTopPostsOfWeek);
postRouter.delete("/:id", authMiddleware, deletePost);
postRouter.get("/:postId", getSinglePost);
postRouter.put("/:id/like", authMiddleware, toggleLike);
postRouter.get("/user/:userId", getPostsByUser);

export default postRouter;