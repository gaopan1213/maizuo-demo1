<template>
  <div class="page-home-center">
    <p>个人中心页</p>
    <button @click="fn">点我调用SyncTitle</button>
    <p v-if="userInfo.username">{{userInfo.username}}</p>
    <router-link to="/login" v-else>点我去登录</router-link>
    <hr />
    <ul>
      <li>
        <router-link to="/money">余额</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'center',
  data() {
    let userInfo = window.localStorage.getItem('userInfo')
    return {
      userInfo: userInfo ? JSON.parse(userInfo) : {}
    }
  },
  methods: {
    fn() {
      this.$store.dispatch('SyncTitle')
    }
  }
}
</script>
