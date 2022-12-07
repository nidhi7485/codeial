const Post = require('../models/Post')
const User = require('../models/User')
// const User = require('../models/User')
const home = (req, res) => {
  // console.log(req.cookies)
  // res.cookie('user_Id', 11)
  // Post.find({}, function (err, posts) {
  //   return res.render('home', {
  //     title: 'Codeal | Home',
  //     posts: posts,
  //   })
  // })
  // populate user of each post
  Post.find({})
    .populate('user')
    .populate({
      path: 'comment',
      populate: { path: 'user' },
    })
    .exec(function (err, posts) {
      User.find({}, function (err, users) {
        return res.render('home', {
          title: 'Codeal | Home',
          posts: posts,
          all_user: users,
        })
      })
    })
}
module.exports = home
