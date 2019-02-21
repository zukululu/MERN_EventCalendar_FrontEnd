import React, { Component } from 'react';

class OneEvent extends Component {
  render() {
    console.log(this.props)
    // let showEvent = this.props.events.filter( event => 
    //   event.id === this.props.match.params)[0]
    return (
      <div>
        {/* {showEvent} */}
        <h1>Hello</h1>
      </div>
    );
  }
}

export default OneEvent;