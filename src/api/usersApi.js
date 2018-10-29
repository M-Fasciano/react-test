export const usersApi = () => {
  return (
    fetch('https://randomuser.me/api/?results=20&nat=gb')
      .then(results => results.json())
      .then(data => {
        let users = data.results.map((user, index) => {
          return (
            <li key={index}>
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
        this.setState({users: users})
      })
  )
}