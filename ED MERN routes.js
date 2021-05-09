import express from "express";
// import { getPosts } from "../controller/posts.js";
import Post from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({ title: req.body.title, desc: req.body.desc });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({
      message: error,
    });
  }

  // post
  //   .save()
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     res.json({
  //       message: err,
  //     });
  //   });
});

router.get("/:postId", async (req, res) => {
  try {
    const getPost = await Post.findById(req.params.postId);
    res.json(getPost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

export default router;
