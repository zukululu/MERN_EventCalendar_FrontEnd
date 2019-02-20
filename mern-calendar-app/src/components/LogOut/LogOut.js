import React, { Component } from 'react';

class LogOut extends Component {
    render() {
        return (
            <div>
                <form>
                    <input value='Log Out' type='submit' onClick={this.props.handleLogOut} />
                </form>
            </div>
        );
    }
}

export default LogOut;