import React from 'react'
import styled from 'styled-components'
import colours from '../../../styles/export/colours.scss'
import icon from '../../../images/sprite.png'

const Navigation = styled.nav`
  background-color: ${colours.grey};
  height: 50px;
  padding: 10px;
  position: fixed;
  text-align: right;
  top: 0;
  width: 100%;
  z-index: 1;
`
const SearchInput = styled.input`
  border: 0;
  border-radius: 30px;
  font-size: 12px;
  margin-right: 30px;
  padding: 5px 15px;
`
const CogIcon = styled.span`
  background: url(${icon}) no-repeat;
  background-position: 0 0;
  display: inline-block;
  height: 40px;
  position: absolute;
  right: 0;
  top: 7px;
  transform: scale(.6);
  width: 40px;
`

const Navbar = () => {
  return (
    <Navigation>
      <SearchInput type="search" id="search" placeholder="Search" />
      <CogIcon />
    </Navigation>
  )
}

export default Navbar