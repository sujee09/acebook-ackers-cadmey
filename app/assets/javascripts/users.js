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
            let delete_button = document.createElement('div')
            delete_button.setAttribute('id', 'deleteButton')
            div.innerHTML = user + time + message + likes
            ReactDOM.render(e(DeleteButton, {post_id: element.id}),  delete_button);
            div.appendChild(delete_button)
            divPosts.appendChild(div)
        });
      });
    };


renderPosts()

const e = React.createElement;

class DeleteButton extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind('this');
    }

    handleClick = () => {
      this.sendDeleteData()
    }

    render() {
      return e(
          'button',
          { onClick: () =>  this.handleClick() },
          'Delete'
          );
      }

    sendDeleteData() {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        fetch("/posts/destroy", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf
          },
          body: JSON.stringify({ post_id: this.props.post_id})
        })
        .then(response => {
        renderPosts()
      })
    }

}