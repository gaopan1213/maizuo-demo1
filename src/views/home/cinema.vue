<template>
  <div calss="page-home-cinama">
    <p>影院列表页</p>
    <p>{{reverseTitle}}</p>
    <p>{{title}}</p>
    <button @click="changeTitle('高兴')">点击我修改title</button>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['reverseTitle']),
    ...mapState(['title'])
  },
  methods: {
    ...mapMutations(['changeTitle'])
  },
  created() {
    console.log(this.$store.getters.reverseTitle)
    this.changeTitle('wange')
  }
}
</script>