import mongoose from "mongoose";
import { checkMongooseIdValidity } from "../../utils/utils.js";
import SavedPost from "./savedPost.model.js";

export const getSavedPost = async (req, res) => {
  try {
    const userId = req.params.id;
    checkMongooseIdValidity(userId);
    const savedPost = await SavedPost.aggregate([
      {
        $match: {
          Userid: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "postId",
          foreignField: "_id",
          as: "postDetails",
        },
      },
      {
        $unwind: "$postDetails",
      },
      {
        $replaceRoot: { newRoot: "$postDetails" },
      },
    ]);
    return res.status(200).send(savedPost);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

export const getAllSavedPost = async (req, res) => {
  try {
    const userId = req.userInfo._id;

    const savedPost = await SavedPost.aggregate([
      {
        $match: {
          Userid: userId,
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "postId",
          foreignField: "_id",
          as: "postDetails",
        },
      },
      {
        $unwind: "$postDetails",
      },
      {
        $replaceRoot: { newRoot: "$postDetails" },
      },
    ]);
    return res.status(200).send(savedPost);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

export const toggleSavedPost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.userInfo._id;

  try {
    // Validate the post ID
    checkMongooseIdValidity(postId);

    // Check if already saved
    const existing = await SavedPost.findOne({ Userid: userId, postId });

    if (existing) {
      // Unsave it
      await SavedPost.deleteOne({ _id: existing._id });
      return res.status(200).send({ message: "Post unsaved" });
    } else {
      // Save it
      const savedPost = await SavedPost.create({
        Userid: userId,
        postId,
      });
      return res.status(200).send({ message: "Post saved", data: savedPost });
    }
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};
