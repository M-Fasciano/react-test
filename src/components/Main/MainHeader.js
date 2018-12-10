import React from 'react'

const MainHeader = () => {
  return (
    <div> 
      <h1>User</h1>
      <p>If you want to get contact information to specific user just select a group and then select him from the list below.</p>
      <span>Select group of users</span>
      <select id="groupUsers" name="groupUsers">
        <option value="developers">Developers</option>
        <option value="designers">Designers</option>
      </select>
    </div>
  )
}

export default MainHeader