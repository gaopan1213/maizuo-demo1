<template>
  <div class="page-home-films">
    <p>电影列表页</p>
    <p>{{title}}</p>
    <p>{{reverseMsg}}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  // computed: {//用计算属性的方式因为仓库中的数据
  //   title() {
  //     return this.$store.state.title
  //   }
  // },
  // computed: mapState(['title']),
  data() {
    return {
      msg: 'hello'
    }
  },
  computed: {
    reverseMsg() {
      return this.msg
        .split('')
        .reverse()
        .join('')
    },
    ...mapState(['title'])
  },
  // computed: mapState({
  //   a: state => state.title
  //   // a: 'title'
  // }),
  created() {
    console.log(this.$store.state.title)
  }
}
</script>
