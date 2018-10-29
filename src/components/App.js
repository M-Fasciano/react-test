import React, { Component } from 'react'
import Menu from './Navigations/Menu'
import Burger from './Navigations/Burger'
import Navbar from './Navigations/Navbar/Navbar'
import Main from './Main'

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
    fetch('https://randomuser.me/api/?results=20&nat=gb')
      .then(results => results.json())
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
        <Main users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default App
