import React, { Component } from 'react'
import usersApi from '../Api/usersApi'
import Menu from './Navigations/Menu/Menu'
import Burger from './Navigations/Burger/Burger'
import Navbar from './Navigations/Navbar/Navbar'
import Main from './Main/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
      users: []
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {    
    usersApi()
      .then(data => {
        this.setState({users: data.results})
      })
  }

  toggleMenu() {
    this.setState({ 
      menu: !this.state.menu
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Menu 
          className={this.state.menu ? "sidebar active" : "sidebar"}
          toggleClassName={this.toggleMenu}
        />
        <Burger
          className={this.state.menu ? "menu menu--bars active" : "menu menu--bars"}
          toggleClassName={this.toggleMenu}
        />
        <Main
          className={this.state.menu ? "active" : ""} 
          users={this.state.users} 
        />
      </React.Fragment>
    )
  }
}

export default App
