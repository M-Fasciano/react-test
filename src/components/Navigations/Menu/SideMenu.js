import React from 'react'
import profileImg from '../../../images/michele-fasciano.jpg'

const SideMenu = (props) => {
  return (
    <aside className={props.className}>
      <header className="sidebar--header">
        <img className="sidebar__picture" src={profileImg} alt="Michele Fasciano"/>
        <span className="sidebar__details">
          <h1>Michele Fasciano</h1>
          <h2>Developer</h2>
        </span>
      </header>
      <nav className="sidebar--nav">
        <h2 className="hidden">Navigation menu</h2>
          <ul>
            {props.children}
          </ul>
      </nav>
    </aside>
  )
}

export default SideMenu