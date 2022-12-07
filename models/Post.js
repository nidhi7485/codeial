const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // include arrays of ids of all comments in this post schema itself
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
)
module.exports = mongoose.model('Post', postSchema)
