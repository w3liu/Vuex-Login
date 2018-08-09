<template>
  <div class="hello">
    <h3 v-if="checkLogin">{{nickName}}</h3><a href="javascript:;" v-if="checkLogin" @click="loginOut">退出</a>
    <a href="javascript:;" v-if="!checkLogin" @click="login(1)">登录</a>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      nickName: state => state.user.nickName
    }),
    ...mapGetters({
      checkLogin: 'user/checkLogin'
    })
  },
  methods: {
    ...mapActions(
      {
        loginOut: 'user/loginOut'
      }
    ),
    login (userId) {
      this.$store.dispatch('user/login', userId)
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
