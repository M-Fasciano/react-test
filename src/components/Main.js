import React from 'react'

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
      <section className="main-content">
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
                return(
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
      </section>
    )
  }
}

export default Main