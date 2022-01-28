const sequelize = require('../config/connection');

const { User, Blog, Comment } = require('../models');

const blogData = require('./blogData.json');
const userData = require('./userData.json');
// const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  // await Comment.bulkCreate(commentData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }
  console.log('\n----- DATABASE SEEDED -----\n');
  process.exit(0);
};

seedDatabase();
