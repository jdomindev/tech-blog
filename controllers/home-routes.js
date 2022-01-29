const {Blog, User, Comment } = require('../models')
// const = require models
const router = require('express').Router();
const withAuth = require('../utils/auth');


// view all blog posts / home page
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: { model: User, attributes: ['username']}
    });
    const blogs = blogData.map(blog => blog.get({plain: true}))
    return res.render('homepage', { blogs
      , loggedIn: req.session.loggedIn  
    });

  } catch (err) {
  console.log(err);
  res.status(500).json(err); 
  }
});

// Get one blog post
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username']}, 
      { model: Comment, include: { model: User, attributes: ['username'] } }]
    });

    if(!blogData) {
      res.status(404).json({message: 'No blog post with this id!'});
      return;
  }
    const blogs = blogData.get({plain: true});
    return res.render('oneBlog', { ...blogs,
       loggedIn: req.session.loggedIn  
      });

  } catch (err) {
  console.log(err);
  res.status(500).json(err);
  }
});

// get dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
      const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: { model: Blog }
      });
      const user = userData.get({plain: true})
      return res.render('dashboard', { ...user, 
        loggedIn: req.session.loggedIn   
      });
  
      } catch (err) {
      console.log(err);
      res.status(500).json(err); 
      }
});

router.get('/dashboard/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username']}, { model: Comment }]
    });

    if(!blogData) {
      res.status(404).json({message: 'No blog post with this id!'});
      return;
  }
    const blogs = blogData.get({plain: true});
    return res.render('dashboardUpdate', { ...blogs,
       loggedIn: req.session.loggedIn  
      });

  } catch (err) {
  console.log(err);
  res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});


module.exports = router;