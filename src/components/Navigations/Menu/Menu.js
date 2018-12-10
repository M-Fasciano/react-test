import React from 'react'
import styled from 'styled-components'
import icon from '../../../images/sprite.png'
import SideMenu from './SideMenu'
import SideMenuItem from './SideMenuItems'

const Icon = styled.span`
  background: url(${icon}) no-repeat;
  display: inline-block;
  height: 40px;
  left: 0;
  position: absolute;
  top: -10px;
  transform: scale(.6);
  width: 40px;

  ${props => props.home && 'background-position: -40px 0'}
  ${props => props.blog && 'background-position: -83px 0'}
  ${props => props.community && 'background-position: -131px 0'}
  ${props => props.contest && 'background-position: -178px 0'}
  ${props => props.about && 'background-position: -222px 0'}
  ${props => props.contact && 'background-position: -267px 0'}
`

class Menu extends React.Component {
  render() {
    return (
      <SideMenu
        className={this.props.className}
        onClick={this.props.toggleClassName}
      >
        <SideMenuItem link="#"><Icon home />Home</SideMenuItem>
        <SideMenuItem link="#"><Icon blog />Blog</SideMenuItem>
        <SideMenuItem link="#"><Icon community />Community</SideMenuItem>
        <SideMenuItem link="#"><Icon contest />Contest</SideMenuItem>
        <SideMenuItem link="#"><Icon about="false" />About</SideMenuItem>
        <SideMenuItem link="#"><Icon contact />Contact</SideMenuItem>
      </SideMenu>
    )
  }
}

export default Menu