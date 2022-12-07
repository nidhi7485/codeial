const Comment = require('../models/Comment')
const Post = require('../models/Post')

const commentCreate = function (req, res) {
  Post.findById(req.body.post, function (err, post) {
    if (post) {
      Comment.create(
        {
          comment: req.body.comment,
          post: req.body.post,
          user: req.user._id,
        },
        function (err, comment) {
          post.comment.push(comment)
          post.save()
          res.redirect('/')
        }
      )
    }
  })
}
const commentDestroy = function (req, res) {
  Comment.findById(req.params.id, function (err, comment) {
    console.log(err)
    if (comment.user == req.user.id) {
      let postId = comment.post
      comment.remove()
      Post.findByIdAndUpdate(
        postId,
        { $pull: { comment: req.params.id } },
        function (err, post) {
          return res.redirect('back')
        }
      )
    } else {
      return res.redirect('back')
    }
  })
}
module.exports = { commentCreate, commentDestroy }
