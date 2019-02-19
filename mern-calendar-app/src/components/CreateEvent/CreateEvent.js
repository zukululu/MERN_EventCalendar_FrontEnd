import React, { Component } from 'react';
import './CreateEvent.scss';

class CreateEvent extends Component {
    render() {
        return (
            <div className="create-form">
                <h2>New Event</h2>

                <form>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <input type="text" name="title" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateEvent;