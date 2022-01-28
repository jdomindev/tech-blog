const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// api/comment/
// add in index.js 
// post a comment
router.post('/:id', async (req, res) => {
    try {
        const newComment = await Comment.create({
          ...req.body,
          user_id: req.session.user_id,
          blog_id: req.params.id,
          include: [{ model: User, attributes: ['username']}, { model: Blog }]
          // idk about this
        });
    
        res.status(200).json(newComment);
      } catch (err) {
        res.status(400).json(err);
      }
  });
  