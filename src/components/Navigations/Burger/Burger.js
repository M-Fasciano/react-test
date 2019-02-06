import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  height: 50px;
  left: 0;
  position: fixed;
  top: 0;
  width: 50px;
  z-index: 3;
`

const Burger = (props) => {
  return (
    <MenuWrapper>
      <button 
        className={props.className}
        onClick={props.toggleClassName}
      >
        <span>toggle menu</span>
      </button>
    </MenuWrapper>
  )
}

export default Burger