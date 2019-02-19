import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import './MainEvent.scss';

class MainEvent extends Component {
    render() {
        return (
            <div className="main-event">
                <Calendar />
            </div>
        );
    }
}

export default MainEvent;