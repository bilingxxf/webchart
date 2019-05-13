<template>
  <div>
    <div id="app">
      <div class="main-user">
        <maininfo></maininfo>
      </div>
      <div class="sidebar">
        <mycard></mycard>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="auto-responders">
        <auto-responders></auto-responders>
      </div>
    </div>
    <Preview v-show="previewImg" :src="previewImg" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// 侧边栏
import mycard from './components/mycard/mycard';
import maininfo from './components/mianinfo/maininfo';
import autoResponders from './components/autoresponders/autoresponders';
import Preview from './items/previewImg'
export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'previewImg'
    ])
  },
  components: {
    mycard,
    maininfo,
    autoResponders,
    Preview
  }
}
</script>

<style lang="scss" scoped>
@import './assets/css/base.scss';
#app {
  display: flex;
  width: 77.5rem;
  height: 48rem;
  background-color: $bg;
  transform: translate3d(-50%, -50%, 0);
  border: $border;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  box-sizing: border-box;
  .main-user {
    margin-left: 0.5rem;
    width: 18rem;
    height: 100%;
    background: pink;
  }
  .sidebar {
    width: 4.4rem;
    height: 100%;
    @include gradient;
  }
  .main {
    height: 100%;
    width: 73.1rem;
    background: $white;
    box-sizing: border-box;
  }
  .auto-responders {
    width: 15.1rem;
    height: 100%;
    background: $white;
    border: $border;
    border-top: none;
    border-right: none;
    border-bottom: none;
    box-sizing: border-box;
  }
}

</style>
