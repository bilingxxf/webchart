<template>
  <div class="chat-box-header flex flex-item flex-align-items">
    <span>{{ target.name }}</span>
    <i class="icon wechat"></i>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'target'
    ])
  }
}
</script>

<style lang="scss" scoped>
.chat-box-header {
  flex: 0 1 5rem;
  padding: 0 1.5rem;
  background: $white;
  font-size: 1rem;
  border: $border;
  border-width: 0 0 1px;
  box-shadow: 0px 0px 20px -5px rgba(19, 17, 12, .1);
  z-index: 1;
  span {
    margin-right: .3rem
  }
}
</style>
