import React, { Component } from 'react';
import './CreateEvent.scss';

class CreateEvent extends Component {
    render() {
        return (
            <div className="create-form">
                <h2>New Event</h2>

                <form>
                    <div>
                        <label htmlFor='title'>Event Name</label>
                        <input type="text" name="title" className="form form_title" />
                    </div>
                    <div>
                        <label htmlFor='location'>Location</label>
                        <input type="text" name="location" className="form form_location" />
                    </div>
                    <div>
                        <label htmlFor='description'>Description</label>
                    </div>
                    <div>
                        <textarea type="text" name="description" className="form form_description" />
                    </div>
                    <div>
                        <label htmlFor='cover'>Cover?</label>
                        <input type="text" name="cover" className="form form_cover" />
                    </div>
                    <div>
                        <label htmlFor='public'>Public Event</label>
                        <input type="checkbox" name="public" />
                    </div>
                    <input value='Submit' type='submit' className="button" />
                </form>
            </div>
        );
    }
}

export default CreateEvent;