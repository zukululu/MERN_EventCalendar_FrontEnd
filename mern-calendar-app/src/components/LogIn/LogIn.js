import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.scss';

class LogIn extends Component {

    render() {
        return (
            <div className="main-form">
                <h2>Log In</h2>
                <form className="form-wrapper">
                <div>
                    <input type='text' name='email' className="form" placeholder='Email' onChange={this.props.handleInput} />
                </div>
                <div>
                    <input type='password' name='password' className="form" placeholder='Password' onChange={this.props.handleInput} />
                </div>
                <input value='Submit' type='submit' className="button" onClick={this.props.handleLogIn} />
                </form>
            </div>
        );
    }
}

export default LogIn;