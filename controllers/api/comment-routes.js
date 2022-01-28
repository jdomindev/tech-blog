const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// api/comment/
// post a comment
router.post('/', withAuth, async (req, res) => {
try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      include: [{ model: User, attributes: ['username']}, { model: Blog }]
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
  
  module.exports = router