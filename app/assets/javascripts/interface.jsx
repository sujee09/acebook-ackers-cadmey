console.log("I'm in the interface.jsx")

fetch('/posts_api')
  .then(response => response.json())
  .then(data => {

    let divPosts = document.getElementById("posts")
    divPosts.innerHTML = ''
    data.forEach(element => {
        let div = document.createElement('div')
        div.setAttribute('id', 'post')
        let user = `<p>${element.user_name}</p><br>`
        let message = `<p>${element.message}</p><br>`
        let time = `<p>${element.created_at}</p><br>`
        div.innerHTML = user + message + time
        divPosts.appendChild(div)
    });
  });


  const e = React.createElement;

  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }

    render() {
      if (this.state.liked) {
        return 'You liked this.';
      }

      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );
    }
  }

  class NewPostBox extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <form class='new-post' id='new-post' action='/create_post_api' method='POST'>
        <input type='text-area' name='message'/>
        <input type='submit' value='Create new post' />
        <input type='hidden' name='user_id' value={session[:user]['id']} />
        </form>
      )
    }
  }

const domContainer = document.getElementById('like-button');
ReactDOM.render(e(LikeButton), domContainer);

ReactDOM.render(

  console.log('hi2'),
  document.getElementById('new-post-box')
);
