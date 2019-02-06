import React from 'react'
import MainHeader from './MainHeader'
import MainUserInfo from './MainUserInfo'

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
      <section 
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
      </section>
    )
  }
}

export default Main