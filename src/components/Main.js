import React from 'react'
import styled from 'styled-components'

const MainContent = styled.section`
  margin-top: 80px;
  padding: 0 10px;

  @media (min-width: 769px) {
    margin-top: 100px;
    padding: 0 30px;
  }
  @media (min-width: 1024px) {
    margin-left: 200px;
    max-width: 55%;
    padding-right: 100px;
  }
  @media (min-width: 1224px) {
    max-width: 60%;
    padding: 0 50px;

    p {
      margin-right: 100px;
    }
  }

  h1 {
    font-size: 14px;
  }
`

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass(index) {
    const selected = this.state.selected === index ? -1 : index;
    this.setState({ selected: selected })
  }

  render() {
    return (
      <MainContent>
        <h1>User</h1>
        <p>If you want to get contact information to specific user just select a group and then select him from the list below.</p>
        <span>Select group of users</span>
        <select id="groupUsers" name="groupUsers">
          <option value="developers">Developers</option>
          <option value="designers">Designers</option>
        </select>

        <div className="main-content__users">
          <ul>
            {
              this.props.users.map((user, index) => {
                return (
                  <li 
                    key={index} 
                    className={index === this.state.selected ? 'active': null} 
                    onClick={()=>this.toggleClass(index)} 
                  >
                    <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
                    {`${user.name.first} ${user.name.last}`}
                    <div className="main-content__users__info">
                      <div>
                        <span></span>
                        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                        {`${user.name.first} ${user.name.last}`}
                      </div>
                      <ul>
                        <li>City</li>
                        <li>{user.location.city}</li>
                        <li>Cell</li>
                        <li>{user.cell}</li>
                        <li>E-mail</li>
                        <li>{user.email}</li>
                      </ul>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </MainContent>
    )
  }
}

export default Main