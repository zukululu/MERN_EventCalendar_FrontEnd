import React, { Component } from 'react';

class OneEvent extends Component {
  
  render() {
    console.log(this.props.events)
    let showEvent = this.props.events.filter( event =>
    event._id === this.props.match.params.id)[0]
    console.log(showEvent)
    return (
      <div>
        <h1>{showEvent.title}</h1>
        by <h3>{showEvent.email}</h3>
      </div>
    );
  }
}

export default OneEvent;