<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavView v-show="headerShow"></NavView>
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
      <router-view></router-view>
      <!-- router-view中包括home.vue等组件 -->
    </transition>
    <FooterView></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue';
import FooterView from './components/Footer.vue';

import {mapGetters, mapActions} from 'vuex'

export default { 
  components:{
    NavView,
    FooterView
  },
  computed:mapGetters([
    'headerShow',
    'loading'
  ]),
  //从getters中获取数据
  watch:{ //***路由发生变化时触发,用来监听路由
    $route(to,from){
      if(to.path=='/user-info'){
        this.$store.dispatch('hideHeader')
        //this.$store从main中的store中来的
        //发射一个hideHeader，在actions中接收
      }else{
        this.$store.dispatch('showHeader')
      }
    }
  }
  /*methods:mapActions([
    'increment',
    'decrement',
    'clickOdd',
    'clickAsync'
    //跑到store.js的action里面
  ])*/

}
</script>

<style lang="scss">
  @import './assets/css/index.css';
  @import './assets/css/base.css'
</style>
