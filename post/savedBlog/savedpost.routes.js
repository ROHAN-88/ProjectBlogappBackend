import express from "express";
import SavedPost from "./savedPost.model.js";
import { getSavedPost, savePost } from "./savedPost.service.js";
import { isUser } from "../../Authication/authication.js";

const routes = express.Router();

routes.post("/:id/addSavedPost", isUser, savePost);

routes.get("/getSavedPost", isUser, getSavedPost);

export default routes;
