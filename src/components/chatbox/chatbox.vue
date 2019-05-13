<template>
  <div class="msg-box flex flex-item">
    <Header />
    <List />
    <Dialog />
  </div>
</template>

<script>
import Header from './header'
import List from './list'
import Dialog from './dialog'

export default {
  components: {
    Header,
    List,
    Dialog
  }
}
</script>

<style lang="scss" scoped>
  .msg-box {
    flex-direction: column;
    overflow: hidden;
  }
</style>
