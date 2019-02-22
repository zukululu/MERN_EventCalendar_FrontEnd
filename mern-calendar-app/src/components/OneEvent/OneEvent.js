import React, { Component } from 'react';

class OneEvent extends Component {
<<<<<<< HEAD

  componentDidUpdate(prevProps, prevState) {
    console.log('updated', prevProps, this.props)
  }
  
  renderEvent = (events) => {

    let showEvent
    if(events) {
      showEvent = events.filter( event =>
        event._id === this.props.match.params.id)[0]
      }
        
    if(showEvent) {
      return (
        <div><h1>{showEvent.title}</h1> by <h3>{showEvent.email}</h3></div>
      )
      }
      else {
        return null
      }
  }
=======
>>>>>>> parent of e320d92... create event redirect & Jimmy solution for show event
  
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