import express from "express";
import { isUser } from "../../Authication/authication.js";
import { checkMongooseIdValidity } from "../../utils/utils.js";
import Post from "./post.model.js";
import {
  createPost,
  deletePost,
  editPost,
  getAllPost,
  getPostByUId,
  getPostId,
  postComments,
  PostLikes,
} from "./post.service.js";

const routes = express.Router();

// ===request ===
//?========================Create post=============
routes.post("/addPost", isUser, createPost);

//? ==============get post==============
routes.get("/getPosts", getAllPost);

//? ==============get post by ID==============
routes.get("/:id/getPost", isUser, getPostId);

routes.get("/:id/getPostofUserById", isUser, getPostByUId);
//?================Get post of User=============
routes.get("/getPostOfUser", isUser, async (req, res) => {
  const userId = req.userInfo._id;

  try {
    //!=======check if userId validity================
    checkMongooseIdValidity(userId);

    const userPost = await Post.aggregate([
      {
        $match: {
          userId: userId,
        },
      },
    ]);

    return res.status(200).send(userPost);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
});

//?==============edit================
routes.put("/:id/editPost", isUser, editPost);

//?=================delete========================
routes.delete("/:id/deletePost", isUser, deletePost);
//!~===================post=================

routes.post("/:id/comments", isUser, postComments);

//!==========likes=========
routes.post("/:id/like", isUser, PostLikes);

export default routes;
