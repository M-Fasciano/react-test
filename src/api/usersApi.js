const usersApi = () => {
  return (
    fetch('https://randomuser.me/api/?results=20&nat=gb', {
      method: 'get'
    })
    .then((results) => {
      return results.json()
    })
  )
}

export default usersApi