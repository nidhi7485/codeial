const Post = require('../models/Post')
const Comment = require('../models/Comment')
const userPost = async function (req, res) {
  const post = await Post.create({
    content: req.body.content,
    user: req.user._id,
  })
  return res.redirect('back')
}

const postDestroy = async function (req, res) {
  console.log(req.params.id)
  const post = await Post.findById(req.params.id)
  //  .ids means converting the object into string
  // console.log(err)
  console.log(post.user)
  if (post.user == req.user.id) {
    post.remove()
    await Comment.deleteMany({ post: req.params.id })
    return res.redirect('back')
  } else {
    return res.redirect('back')
  }
}

module.exports = { userPost, postDestroy }
