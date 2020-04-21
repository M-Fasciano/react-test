import React, { Component } from 'react'
import usersApi from '../Api/usersApi'
import Menu from './Navigations/Menu/Menu'
import Burger from './Navigations/Burger/Burger'
import Navbar from './Navigations/Navbar/Navbar'
import Main from './Main/Main'
import StickyBar from './StickyBar/StickyBar'
import Footer from './Footer/Footer'

const divStyle = {
  position: 'relative'
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      menu: false,
      users: []
    }
    this.footer = React.createRef()
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {    
    usersApi()
      .then(data => {
        this.setState({users: data.results})
      })
    const height = document.getElementById('footer').clientHeight
    this.setState({ height })
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
        <div style={divStyle}>
          <Main
            className={this.state.menu ? "active" : ""} 
            users={this.state.users} 
          />
          <StickyBar
            bottomThreshold={this.state.height}
            stickyStyles={{
              backgroundColor: '#333',
              color: '#fff',
              padding: '2rem'
            }}
          >
            StickyBar
          </StickyBar>
        </div>
        <Footer height={this.state.height} />
      </React.Fragment>
    )
  }
}

export default App
