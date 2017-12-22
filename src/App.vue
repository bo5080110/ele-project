<template>
  <div>
    <ele-header/>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
  import axios from 'axios'
  import header from './components/header/header.vue'

  export default {

    mounted () {

      this.$store.dispatch('requestSeller')
      this.$store.dispatch('requestGoods')
      this.$store.dispatch('requestRatings')
    },

    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      float left
      width:33.33333%
      text-align center
      font-size 14px
      color rgb(77,85,93)
      .router-link-active
        color: rgb(240,20,20)
</style>
