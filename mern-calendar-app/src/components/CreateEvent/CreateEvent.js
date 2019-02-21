import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import './CreateEvent.scss';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

class CreateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: new Date(),
            author: '',
            public: false
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleDateChange(date) {
        this.setState({
            date: date
        });
    }

    handleChange(evt) {
        const variable = evt.target.name
        console.log(variable)
        this.setState({[variable]: evt.target.value }, 
        () => {
            console.log(this.state)
        })
        // console.log(evt.target.name)
        // console.log(evt.target.value)
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/events/new', this.state)
            .then(res => {
                console.log(res.data)
            })
    }

    render() {
        return (
            <div className="create-form">
                <div className="create-form-header">
                    <h2>New Event</h2>
                </div>

                <form className="form-wrapper" onSubmit={this.handleSubmit}>
                    <div className="label-title"><label htmlFor='title'>Event Name</label></div>
                    <div className="form-title"><input type="text" name="title" value={this.state.value} className="form" onChange={this.handleChange} /></div>
                    <div className="calendar"></div>
                    <div className="date">
                        <label htmlFor='date'>Date</label>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.handleDateChange} name="date" value={this.state.value}
                        /></div>
                    <div className="location">
                        <label htmlFor='location'>Location</label>
                        <input type="text" name="location" value={this.state.value} className="form" onChange={this.handleChange} /></div>
                    <div className="label-description"><label htmlFor='description'>Description</label></div>
                    <div className="form-description">
                        <textarea type="text" name="description" value={this.state.value} className="form" onChange={this.handleChange} />
                    </div>
                    <div className="label-cover"><label htmlFor='cover'>Cover?</label></div>
                    <div className="form-cover"><input type="text" name="cover" value={this.state.value} className="form" onChange={this.handleChange} /></div>
                    <div className="label-public"><label htmlFor='public'>Public Event</label></div>
                    <div className="form-public"><input type="checkbox" name="public" value={this.state.value} onChange={this.handleChange} /></div>
                    <div className="button-submit"><input value='Submit' type='submit' className="button" /></div>
                </form>
            </div>
        );
    }
}

export default CreateEvent;