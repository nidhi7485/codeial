const Post = require('../models/Post')

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
    .exec(function (err, posts) {
      return res.render('home', {
        title: 'Codeal | Home',
        posts: posts,
      })
    })
}
module.exports = home
