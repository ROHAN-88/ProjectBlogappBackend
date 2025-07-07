import express from "express";
import { isUser } from "../../Authication/authication.js";
import {
  getAllSavedPost,
  getSavedPost,
  toggleSavedPost,
} from "./savedPost.service.js";

const routes = express.Router();

routes.post("/:id/SavePost", isUser, toggleSavedPost);

routes.get("/:id/getSavedPost", isUser, getSavedPost);

routes.get("/getAllSavedPost", isUser, getAllSavedPost);
export default routes;
