const users = [
  {'userId': 1, 'nickName': 'w3liu', 'password': '123456'}
]

export default {
  getUserInfo (userid) {
    var user = users.find(item => item.userId === userid)
    return user
  }

}
