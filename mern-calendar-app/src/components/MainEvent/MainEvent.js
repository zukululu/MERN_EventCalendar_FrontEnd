import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import axios from 'axios';
import './MainEvent.scss';

class MainEvent extends Component {

    constructor() {
        super()

        this.state = {
            events: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3001/")
            .then(console.log("got"))
            .then((res) => {
                console.log(res)
                this.setState({
                    events: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const events = this.state.events.map((event, index) => {
            return (
                <div key={index} className="event-list">
                    {event.title}
                </div>
            )
        })
        return (
            <div className="main-event">
                <Calendar />
                {events}
            </div>
        );
    }
}

export default MainEvent;