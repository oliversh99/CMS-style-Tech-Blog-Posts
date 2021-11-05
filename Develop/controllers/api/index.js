const router = require('express').Router();
const userRoutes = require('./userRoutes');
const PostRoutes = require('./PostRoutes');
const commentRoutes = require("./commentRoutes");

router.use("/comments", commentRoutes);
router.use('/Post',  PostRoutes);
router.use('/users', userRoutes);

module.exports = router;
