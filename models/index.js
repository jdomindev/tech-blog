const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// User hasmany Blogs
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
// User hasmany comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Blog has one user
Blog.belongsTo(User, {
    foreignKey: 'user_id',
  });

// blog has many comments
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
  });

// comments belongTo one user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// comments have one blog
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
  });

module.exports = { User, Blog, Comment };
