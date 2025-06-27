import SavedPost from "./savedPost.model.js";

export const getSavedPost = async (req, res) => {
  const userId = req.userInfo._id;

  try {
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
    ]);
    return res.status(200).send(savedPost);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

export const savePost = async (req, res) => {
  const { postId } = req.body;
  const userId = req.userInfo._id;

  try {
    const savedPost = await SavedPost.create({
      Userid: userId,
      postId: postId,
    });

    return res.status(200).send(savedPost);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

export const deleteSavedPost = async (req, res) => {
  return res.status(400).send({ message: "Saved Post Deleted" });
};
