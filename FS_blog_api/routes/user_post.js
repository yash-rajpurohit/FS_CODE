const router = require("express").Router();
const User = require('../database/user_model');
const Post = require('../database/post_model');

// create post
router.post("/create_post/:id", async (req, res) => {

  try{

  const post = await User.findById(req.params.id);
  console.log(post._id)
  userid = post._id
  const newPost = new Post({
    heading: req.body.heading,
    blog: req.body.blog,
    userID: userid,
  });
    const savedPost = await newPost.save();
    res.status(200).json({message: 'post saved'});
  } catch (error) {
    res.status(500).json(error);
  }
});


// get post
router.get("/get_post/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  module.exports = router;