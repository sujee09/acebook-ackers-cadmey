// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

console.log("I'm in users")
function renderPosts() {
    fetch('/user_posts_api')
      .then(response => response.json())
      .then(data => {

        let divPosts = document.getElementById("posts")
        divPosts.innerHTML = ''
        data.forEach(element => {
            let div = document.createElement('div')
            div.setAttribute('id', 'post')
            let user = `<p id="user_name">${element.user_name}</p><br>`
            let message = `<p id="message">${element.message}</p><br>`
            let time = `<p id="time">${element.short_time}</p><br>`
            let likes = `<p id="no_of_likes">Likes:${element.number_of_likes}</p><br>`
            // let like_button = document.createElement('div')
            // like_button.setAttribute('id', 'likeButton')
            div.innerHTML = user + time + message + likes
           // ReactDOM.render(e(LikeButton, {post_id: element.id}),  like_button);
           // div.appendChild(like_button)
            divPosts.appendChild(div)
        });
      });
    };


renderPosts()