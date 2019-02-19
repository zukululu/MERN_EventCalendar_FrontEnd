import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'

class Header extends Component {
    render() {
        let navLinks = []
        if (this.props.isLoggedIn) {
            navLinks.push(<Link key={2} to='/logout' className="navLink">Log Out</Link>)
            navLinks.push(<Link key={3} to='/create' className="navLink">Create Event</Link>)
            navLinks.push(<Link key={4} to='/myevents' className="navLink">My Events</Link>)
        } else {
            navLinks.push(<Link key={5} to='/signup' className="navLink">Sign Up</Link>)
            navLinks.push(<Link key={6} to='/login' className="navLink">Log In</Link>)
        }
        return (
            <div>
                <header>
                    <div className="logo"><Link key='logo' to='/' className="header-link"><h1>Lettuce Meet</h1></Link></div>
                    <div className="link-box">
                        <div className="link-list">
                            {navLinks}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;