const users = [
  {'userId': 1, 'nickName': 'w3liu', 'password': '123456'}
]

export default {
  getUserInfo (userid) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        var user = users.find(item => item.userId === userid)
        if (user) {
          resolve(user)
        } else {
          let err = 'error'
          reject(err)
        }
      }, 2000)
    })
  }

}
