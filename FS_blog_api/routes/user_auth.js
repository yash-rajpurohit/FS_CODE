const router = require('express').Router()
const User = require('../database/user_model')
const bcrypt = require('bcryptjs')

router.post('/signup', async (req, res) => {

    try{
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPass
    })

    const user = await newUser.save()
    res.status(200).json({message: 'user is created'})
}
catch (error) {
    res.status(500).json(error);
  }
})


router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(400).json("Wrong credentials!");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials!");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/get_user/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;