const {Blog, User, Comment } = require('../models')
// const = require models
const router = require('express').Router();

// view all blog posts / home page
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: { model: User, attributes: ['username']}
    });
    const blogs = blogData.map(blog => blog.get({plain: true}))
    return res.render('homepage', { blogs });

  } catch (err) {
  console.log(err);
  res.status(500).json(err); 
  }
});

// Get one blog post
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: { model: User, attributes: ['username']}
    });

    if(!blogData) {
      res.status(404).json({message: 'No blog post with this id!'});
      return;
  }
    const blogs = blogData.get({plain: true});
    return res.render('oneBlog', { blogs });

  } catch (err) {
  console.log(err);
  res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;