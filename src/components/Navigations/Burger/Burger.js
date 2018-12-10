import React from 'react'

class Burger extends React.Component {
  render() {
    return (
      <div className="menu__wrapper">
        <button 
          className={this.props.className}
          onClick={this.props.toggleClassName}
        >
          <span>toggle menu</span>
        </button>
      </div>
    )
  }
}

export default Burger