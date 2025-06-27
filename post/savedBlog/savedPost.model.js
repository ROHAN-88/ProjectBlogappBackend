import mongoose from "mongoose";

const SavedPostSchema = new mongoose.Schema({
  Userid: {
    type: mongoose.ObjectId, //mongoose.Schema.Types.ObjectId
    ref: "User",
    required: true,
  },
  postId: {
    type: mongoose.ObjectId, //mongoose.Schema.Types.ObjectId
    ref: "Post",
    required: true,
  },
});
const SavedPost = mongoose.model("SavedPost", SavedPostSchema);
export default SavedPost;
