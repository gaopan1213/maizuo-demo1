<template>
  <div class="page-home">
    <router-view></router-view>
    <ul class="nav-bar">
      <router-link to="/films" tag="li">
        <i class="iconfont icon-dianying"></i>
        <span>电影</span>
      </router-link>
      <router-link to="/cinema" tag="li">
        <i class="iconfont icon-yingyuana"></i>
        <span>影院</span>
      </router-link>
      <router-link to="/center" tag="li">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
  .nav-bar {
    @include border-top;
    display: flex;
    height: 50px;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      color: #797d82;
      i {
        margin-bottom: 3px;
        font-size: 22px;
      }
      span {
        font-size: 12px;
      }
      &.router-link-active {
        color: #ff5f16;
      }
    }
  }
}
</style>