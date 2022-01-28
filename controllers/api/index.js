const router = require('express').Router();
const userRoutes = require('./user-routes');
const dashRoutes = require('./dashboard-routes');
// const commRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/dashboard', dashRoutes);
// router.use('/comment', commRoutes);

module.exports = router;