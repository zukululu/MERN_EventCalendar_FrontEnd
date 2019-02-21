import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './Logout.scss'

class LogOut extends Component {

    handleRedirect() {
        return <Redirect to='/' />
    }

    render() {
        return (
            <div className="button-wrapper">
                <form>
                    <input value='Log Out' type='submit' onClick={this.props.handleLogOut} className="button-logout" />
                </form>
                {this.props.isLoggedIn === false ? this.handleRedirect() : null}
            </div>
        );
    }
}

export default LogOut;