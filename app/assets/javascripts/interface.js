console.log("I'm in the interface")
function reloadPage() {
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
        let like_button = document.createElement('div')
        div.innerHTML = user + message + time
        ReactDOM.render(e(LikeButton, {post_id: element.id}),  like_button);
        div.appendChild(like_button)
        divPosts.appendChild(div)
    });
  });
}

reloadPage();


  const e = React.createElement;


  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        liked: false,
      };
      this.handleClick = this.handleClick.bind('this');
      this.fetchLikeData()
    }

    fetchLikeData() {
      const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
      fetch("/likes/data", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrf
        },
        body: JSON.stringify({ post_id: this.props.post_id })
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(data)
      })
    }
    handleClick = () => {
      this.setState(prevState => (prevState, {
        liked: !prevState.liked
      }));
      this.sendLikeData()
    }

    render() {
      if (this.state.loading) {
        return ''
      }
      return e(
          'button',
          { onClick: () =>  this.handleClick() },
          this.state.liked ? 'Unlike' : 'Like'
          );
      }



    sendLikeData() {
      if (this.state.liked) {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        fetch("/likes/destroy", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf
          },
          body: JSON.stringify({ post_id: this.props.post_id})
        })
        .then(response => {
      })
    } else {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        fetch("/likes/create", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf
          },
          body: JSON.stringify({ post_id: this.props.post_id})
        })
        .then(response => {
        console.log(response);
        // console.log(response.json());
        // console.log(JSON.stringify(response));
      })
    }
  }

}

class PostMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind('this');

  }

  handleClick = () => {
    const messageValue = document.getElementById('new-message-box').value
    if (messageValue !== '') {
      this.sendPost()
      document.getElementById('new-message-box').value = '';
      refreshMessageBox();
      console.log('or me')
    }
    console.log('am I being called')

  }

  render() {
    console.log('messagebox render')
    return [e(
            'textarea',
            { rows: '1', id: 'new-message-box', placeholder: "What's on your mind?"},
            null
          ),
          e(
              'button',
              { onClick: () =>  this.handleClick() },
              'Create Post'
            ),];
    }



  sendPost() {
      console.log('hello from send post')
      const messageText = document.getElementById('new-message-box').value
      const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
      fetch("/posts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrf
        },
        body: JSON.stringify({ message: messageText})
      })
      .then(response => {
      console.log(response);
      console.log(response.json());
      console.log(JSON.stringify(response));
      reloadPage();
      })

  }
}

class TestComp extends React.Component {
  render() {
    return e(
        'p',
        null,
        'test component'
      )
  }
}

function refreshMessageBox() {
  console.log('refreeshing')
  const postContainer = document.getElementById('abc')
  ReactDOM.render(e(PostMessage), postContainer)
}
refreshMessageBox();
