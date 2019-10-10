<template>
  <div class="page-login">
    <h1>登录页面</h1>
    <label for="username">
      用户名：
      <input type="text" id="username" />
    </label>
    <button @click="fn">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    fn() {
      window.localStorage.setItem(
        'userInfo',
        JSON.stringify({ username: '张三' })
      )
    }
  }
}
</script>