<template>
  <div class="page-films">
    <p>电影详情页 </p>
  </div>
</template>
<script>
  export default {
    name:'film',
    created(){
      console.log(this.$store.state)
    }
  }
</script>