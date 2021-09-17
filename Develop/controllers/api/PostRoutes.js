const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
      // this for post create
      const PostData = await Post.create(req.body);
  
         res.json(PostData)
    }catch(err){
        res.status(500)
    }})

    module.exports = router
