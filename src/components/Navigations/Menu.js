import React from 'react'

import SideMenu from './Menu/SideMenu'
import SideMenuItem from './Menu/SideMenuItems'

class Menu extends React.Component {
  render() {
    return (
      <SideMenu
        className={this.props.className}
        onClick={this.props.toggleClassName}
      >
        <SideMenuItem link="#"><span className="[ icon icon--home ]"></span>Home</SideMenuItem>
        <SideMenuItem link="#"><span className="[ icon icon--blog ]"></span>Blog</SideMenuItem>
        <SideMenuItem link="#"><span className="[ icon icon--community ]"></span>Community</SideMenuItem>
        <SideMenuItem link="#"><span className="[ icon icon--contest ]"></span>Contest</SideMenuItem>
        <SideMenuItem link="#"><span className="[ icon icon--about ]"></span>About</SideMenuItem>
        <SideMenuItem link="#"><span className="[ icon icon--contact ]"></span>Contact</SideMenuItem>
      </SideMenu>
    )
  }
}

export default Menu