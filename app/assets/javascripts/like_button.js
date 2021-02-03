import React from 'react';
import ReactDOM from 'react-dom';

'use strict';
console.log('is this file open')
console.log(React)
const e = React.createElement;
console.log('React')

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(
        'button',
        { onClick: () => this.setState({ liked: false }) },
        'disLike'
      )
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
