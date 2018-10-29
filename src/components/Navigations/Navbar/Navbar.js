import React from 'react'

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="search">
        <input className="search__input" type="search" id="search" placeholder="Search" />
      </div>
      <span className="[ icon icon--cog ]"></span>
    </nav>
  )
}

export default Navbar