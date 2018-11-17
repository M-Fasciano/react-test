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

class Burger extends React.Component {
  render() {
    return (
      <MenuWrapper>
        <button 
          className={this.props.className}
          onClick={this.props.toggleClassName}
        >
          <span>toggle menu</span>
        </button>
      </MenuWrapper>
    )
  }
}

export default Burger