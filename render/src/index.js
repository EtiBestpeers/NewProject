import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <h4>The render() method is required, and is the method that actually outputs the HTML to the DOM.</h4>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
