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
          post.comments.push(comment)
          post.save()
        }
      )
    }
  })
}
module.exports = commentCreate
