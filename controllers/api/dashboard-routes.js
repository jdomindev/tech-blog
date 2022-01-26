const router = require('express').Router();
const { User, Blog } = require('../../models');


router.get('/dash', async (req, res) => {
    try {
        const blogData = await User.findOne({
            where: {user_id: req.body.id},
            include: { model: Blog}
        });
        const blogs = blogData.map(blog => blog.get({plain: true}))
        return res.render('homepage', { blogs });
    
        } catch (err) {
        console.log(err);
        res.status(500).json(err); 
        }
  });

router.post('/', async (req, res) => {
    try {
      
    
        res.status(200).json(userData);
      
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;