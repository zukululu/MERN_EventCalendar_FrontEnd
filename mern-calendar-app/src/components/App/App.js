import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Styling
import './App.scss';

// Routes
import CreateEvent from '../CreateEvent/CreateEvent'
import Header from '../Header/Header'
import LogInForm from '../LogIn/LogIn'
import MainEvent from '../MainEvent/MainEvent'
import SignUpForm from '../SignUp/SignUp'

class App extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogOut () {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp(e) {
    e.preventDefault()
    axios.post('http://localhost:3001/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }

  handleLogIn (e) {
    e.preventDefault()
    axios.post('http://localhost:3001/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({isLoggedIn: true})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <div className="body">
          <Switch>
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
            <Route path='/create' render={() => {
              return (
                <CreateEvent isLoggedIn={this.state.isLoggedIn} />
              )
            }} />
            <Route path="/" render={() => {
                return (
                  <MainEvent isLoggedIn={this.state.isLoggedIn} />
                )
              }} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
