'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return new Date().getFullYear()
  }
}

const domContainer = document.querySelector('#copyright_date');
ReactDOM.render(e(LikeButton), domContainer);
