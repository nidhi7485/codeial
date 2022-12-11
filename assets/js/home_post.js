{
  // method for using form data for new post using ajax
  let createPost = function () {
    let newPostForm = $('#new-post-form')
    newPostForm.submit((e) => {
      e.preventDefault()
      $.ajax({
        type: 'post',
        url: '/posts/create',
        data: newPostForm.serialize(),
        success: function (data) {
          let newPost = newPostDom(data.data.post)
          $('#post-list-container>ul').prepend(newPost)
        },
        error: function (error) {
          console.log(error.responseText)
        },
      })
    })
  }

  // method to create a post in DOM

  let newPostDom = function (post) {
    return $(`<li id="${post._id}">
  <p>
    
    <small>
      <a class="post-delete-button" href="/posts/destroy/${post._id}"
        ><i class="fa-solid fa-trash"></i>
      </a>
    </small>
     ${post.content}<br />
    <small> ${post.user.name} </small>
  </p>
  <div class="post-comment">
   
    <form action="/comment/create" method="POST">
      <input
        type="text"
        name="comment"
        placeholder="type here to add comment..."
      />
      <input type="hidden" name="post" value="${post._id}" />
      <input type="submit" value="add comment" />
    </form>
    
    <div class="post-comment-list">
      <ul id="post-comment-${post._id}">

      </ul>
    </div>
  </div>
</li>`)
  }

  createPost()
}
