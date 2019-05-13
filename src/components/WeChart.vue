<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Tree />
</ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Socket from '@/assets/js/socket_io.js'
import Tree from '../items/Tree'

export default {
  name: 'Wechart',
  data () {
    return {
      msg: 'Welcome to Your Wechart'
    }
  },
  computed: {
    ...mapState(['socket_uri'])
  },
  components: {
    Tree
  },
  created () {
    Socket.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/css/base.scss';
h1 {
  color: $greenBg;
}
</style>
