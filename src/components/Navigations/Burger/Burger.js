import React from 'react'

const Burger = (props) => {
  return (
    <div className="menu__wrapper">
      <button 
        className={props.className}
        onClick={props.toggleClassName}
      >
        <span>toggle menu</span>
      </button>
    </div>
  )
}

export default Burger