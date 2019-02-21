import React, { Component } from 'react';

class OneEvent extends Component {
  
  render() {
    console.log(this.props.events)
    let showEvent = this.props.events.filter( event =>
    event._id === this.props.match.params.id)
    console.log(showEvent)
    return (
      <div>
        {showEvent[0].title}
        <h1>Hello</h1>
      </div>
    );
  }
}

export default OneEvent;