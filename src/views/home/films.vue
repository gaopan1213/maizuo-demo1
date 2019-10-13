<template>
  <div class="page-home-films">
    <!-- 轮播图 -->
    <div style="height:200px"></div>
    <!-- tabs切换 -->
    <div class="tabs">
      <ul>
        <li :class="{'active':curFilmType=='nowPlaying'}" @click="chgFilmType('nowPlaying')">正在热映</li>
        <li :class="{'active':curFilmType=='comingSoon'}" @click="chgFilmType('comingSoon')">即将上映</li>
      </ul>
      <div class="active-line" :style="{'left':curFilmType=='nowPlaying'?'0':'50%'}">
        <span></span>
      </div>
    </div>
    <!-- 电影列表 -->
    <component :is="curFilmType" />
  </div>
</template>
<script>
import nowPlaying from '../../components/nowPlaying'
import comingSoon from '../../components/comingsoon'
import { mapState } from 'vuex'
export default {
  name: 'films',
  data() {
    return {
      curFilmType: 'nowPlaying'
    }
  },
  components: {
    nowPlaying,
    comingSoon
  },
  methods: {
    chgFilmType(type) {
      this.curFilmType = type
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
.tabs {
  height: 50px;
  @include border-bottom;
  position: sticky;
  top: 0;
  z-index: 999;
  background: white;
  ul {
    display: flex;
    align-items: center;
    height: 50px;
    li {
      flex: 1;
      text-align: center;
      &.active {
        color: #ff5f16;
      }
    }
  }
  .active-line {
    height: 2px;
    width: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: left 0.5s;
    span {
      display: block;
      width: 56px;
      height: 2px;
      margin: auto;
      background: #ff5f16;
    }
  }
}
</style>
