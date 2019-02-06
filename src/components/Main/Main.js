import React from 'react'
import MainHeader from './MainHeader'
import MainUserInfo from './MainUserInfo'
import styled from 'styled-components'

const MainContent = styled.section`
  padding: 80px 10px 0;

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

  &.active {
    position: fixed;
    width: 100%;
    z-index: -1;
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
      <MainContent 
        className={this.props.className}
        onClick={this.props.toggleClassName}
      >
        <MainHeader/>

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
                    <MainUserInfo user={user} />
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