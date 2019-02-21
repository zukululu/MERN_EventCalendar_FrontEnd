import React, { Component } from 'react';

class OneEvent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events : []
    }
  }

  componentDidMount() {
    this.setState({
      events: this.props.events
    })
  }

  render() {
    console.log(this.state.events)
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