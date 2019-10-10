<template>
  <div class="page-home-center">
    <p>个人中心页</p>
    <button @click="fn">点我调用SyncTitle</button>
    <router-link to="/login">点我去登录</router-link>
  </div>
</template>
<script>
export default {
  methods: {
    fn() {
      this.$store.dispatch('SyncTitle')
    }
  }
}
</script>
