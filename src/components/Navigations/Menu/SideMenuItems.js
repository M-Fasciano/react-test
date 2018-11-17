import React from 'react'

const SideMenuItem = (props) => {
  return (
    <li>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  )
}

export default SideMenuItem