import React from 'react'

const SideMenuItem = (props) => {
  return (
    <li>
      <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
        {props.children}
      </a>
    </li>
  )
}

export default SideMenuItem