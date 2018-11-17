import React from 'react'
import profileImg from '../../../images/michele-fasciano.jpg'
import styled from 'styled-components'
import colours from '../../../styles/export/colours.scss'

const SidebarHeader = styled.header`
  margin-bottom: 20px;

  @media (min-width: 769px) {
    margin-bottom: 50px;
  }
`
const SidebarImg = styled.img`
  border: 2px solid ${colours.white};
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  max-width: 50px;

  @media (min-width: 769px) {
    display: block;
    margin: 20px auto;
  }
`
const SidebarDetails = styled.span`
  display: inline-block;
  position: relative;
  top: -5px;

  @media (min-width: 769px) {
    display: block;
    text-align: center;
  }

  h1 {
    font-size: 14px;
  }

  h2 {
    font-size: 12px;
    font-weight: 100px;
  }
`
const SidebarNav = styled.nav`
  li {
    margin-bottom: 20px;
    padding-left: 45px;
    position: relative;

    a {
      color: ${colours.white};
      text-decoration: none;
    }
  }
`

const SideMenu = (props) => {
  return (
    <aside className={props.className}>
      <SidebarHeader>
        <SidebarImg src={profileImg} alt="Michele Fasciano" />
        <SidebarDetails>
          <h1>Michele Fasciano</h1>
          <h2>Developer</h2>
        </SidebarDetails>
      </SidebarHeader>
      <SidebarNav>
        <ul>
          {props.children}
        </ul>
      </SidebarNav>
    </aside>
  )
}

export default SideMenu