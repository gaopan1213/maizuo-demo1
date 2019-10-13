<template>
  <div class="nowPlayingList-wrap">
    <ul>
      <router-link
        :to="`/films/${item.filmId}`"
        tag="li"
        v-for="item in filmList"
        :key="item.filmId"
      >
        <div class="nowPlaying-img">
          <img :src="item.poster" />
        </div>
        <div class="nowPlaying-info">
          <div class="nowPlaying-name">{{item.name}}</div>
          <div class="nowPlaying-grade">
            观众评分
            <span>7</span>
          </div>
          <div class="nowPlaying-actors">主演：{{formatActors(item.actors)}}</div>
          <div class="nowPlaying-detail'">{{item.nation}} | {{item.runtime}}</div>
        </div>
        <div class="nowPlaying-buy">
          <button class="buy">购票</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss">
@import '../assets/styles/common/mixin.scss';
.nowPlayingList-wrap {
  margin-left: 15px;
  li {
    padding: 15px 15px 15px 0;
    height: 94px;
    overflow: hidden;
    @include border-bottom;
    display: flex;
    .nowPlaying-img {
      width: 66px;
      flex-shrink: 0;
      img {
        width: 100%;
      }
    }
    .nowPlaying-buy {
      align-items: center;
      display: flex;
      align-items: center;
      width: 50px;
      flex-shrink: 0;
      .buy {
        @include border;
        height: 25px;
        border: none;
        background: none;
      }
      &:last-child::after {
        border-bottom: none;
      }
    }
    .nowPlaying-info {
      padding: 0 10px;
      overflow: hidden;
      flex: 1;
      line-height: 1.5;
      > div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'nowPlaying',
  computed: {
    ...mapState('film', ['filmList'])
  },
  methods: {
    ...mapActions('film', ['getFilmList']),
    formatActors(actors) {
      let temp = actors.map(item => {
        return item.name
      })
      return temp.join()
    }
  },
  created() {
    this.getFilmList({
      type: 1
    })
  }
}
</script>
