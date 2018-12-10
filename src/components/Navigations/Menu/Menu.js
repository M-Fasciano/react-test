import React from 'react'

import SideMenu from './SideMenu'
import SideMenuItem from './SideMenuItems'

class Menu extends React.Component {
  render() {
    return (
      <SideMenu
        className={this.props.className}
        onClick={this.props.toggleClassName}
      >
        <SideMenuItem link="#home"><span className="[ icon icon--home ]"></span>Home</SideMenuItem>
        <SideMenuItem link="#blog"><span className="[ icon icon--blog ]"></span>Blog</SideMenuItem>
        <SideMenuItem link="#community"><span className="[ icon icon--community ]"></span>Community</SideMenuItem>
        <SideMenuItem link="#contest"><span className="[ icon icon--contest ]"></span>Contest</SideMenuItem>
        <SideMenuItem link="#about"><span className="[ icon icon--about ]"></span>About</SideMenuItem>
        <SideMenuItem link="#contact"><span className="[ icon icon--contact ]"></span>Contact</SideMenuItem>
      </SideMenu>
    )
  }
}

export default Menu