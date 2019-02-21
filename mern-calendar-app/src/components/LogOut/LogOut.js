import React, { Component } from 'react';
import './Logout.scss'

class LogOut extends Component {
    render() {
        return (
            <div className="button-wrapper">
                <form>
                    <input value='Log Out' type='submit' onClick={this.props.handleLogOut} className="button-logout" />
                </form>
            </div>
        );
    }
}

export default LogOut;