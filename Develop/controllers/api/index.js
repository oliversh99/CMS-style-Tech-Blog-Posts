const router = require('express').Router();
const userRoutes = require('./userRoutes');
const PostRoutes = require('./PostRoutes');


router.use('/Post',  PostRoutes);
router.use('/users', userRoutes);

module.exports = router;
