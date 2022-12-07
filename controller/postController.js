const Post = require('../models/Post')
const Comment = require('../models/Comment')
const userPost = function (req, res) {
  Post.create(
    { content: req.body.content, user: req.user._id },
    function (err, post) {
      if (err) {
        console.log(err)
        return
      }
      return res.redirect('back')
    }
  )
}

const postDestroy = function (req, res) {
  console.log(req.params.id)
  Post.findById(req.params.id, function (err, post) {
    //  .ids means converting the object into string
    // console.log(err)
    console.log(post.user)
    if (post.user == req.user.id) {
      post.remove()
      Comment.deleteMany({ post: req.params.id }, function (err) {
        return res.redirect('back')
      })
    } else {
      return res.redirect('back')
    }
  })
}

module.exports = { userPost, postDestroy }
