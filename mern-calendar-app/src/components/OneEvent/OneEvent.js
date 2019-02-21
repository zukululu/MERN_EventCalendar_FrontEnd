import React, { Component } from 'react';


class OneEvent extends Component {
  render() {
    console.log(this.props.events)

    return (
      <div>
        {/* {showEvent} */}
        <h1>Hello</h1>
      </div>
    );
  }
}

export default OneEvent;