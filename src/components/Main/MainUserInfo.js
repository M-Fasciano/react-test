import React from 'react'

const MainUserInfo = (props) => {
  return (
    <div className="main-content__users__info">
      <div>
        <span></span>
        <img src={props.user.picture.large} alt={`${props.user.name.first} ${props.user.name.last}`} />
        {`${props.user.name.first} ${props.user.name.last}`}
      </div>
      <ul>
        <li>City</li>
        <li>{props.user.location.city}</li>
        <li>Cell</li>
        <li>{props.user.cell}</li>
        <li>E-mail</li>
        <li>{props.user.email}</li>
      </ul>
    </div>
  )
}

export default MainUserInfo