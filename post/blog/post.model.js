import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      min: 5,
      max: 200,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    text: {
      type: String,
      required: true,
      min: 5,
      max: 500,
    },

    imageUrl: {
      type: String,
      required: true,
    },
    imageType: {
      type: String,
      required: false,
      enum: ["Video", "Image"],
    },
    userId: {
      type: mongoose.ObjectId, //mongoose.Schema.Types.ObjectId
      ref: "User",
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    pictureUrl: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      enum: [
        "sports",
        "entertainment",
        "travel",
        "food",
        "fashion",
        "fitness",
        "health",
        "business",
        "other",
      ],
      required: false,
    },
    comment: {
      type: [commentSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
