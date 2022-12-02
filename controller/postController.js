const Post = require('../models/Post')

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
module.exports = userPost
