<template>
  <div class="chat-box-list">
    <ul v-if="currentDialog" id="dialog_list">
      <DialogItem v-for="(item, index) in currentDialog" :key="index" :data="item" />
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapState, mapGetters } from 'vuex'
import DialogItem from '../../items/dialogItem'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'target',
      'user'
    ]),
    ...mapGetters([
      'currentDialog'
    ])
  },
  watch: {
    currentDialog () {
      setTimeout(() => {
        this.slider(300)
      })
    }
  },
  components: {
    DialogItem
  },
  methods: {
    slider (time) {
      $('#dialog_list').slideBottom({ time })
    }
  },
  created () {
  },
  mounted () {
    this.slider()
  }
}
</script>

<style lang="scss" scoped>
.chat-box-list {
  flex: 1;
  position: relative;
  background: $dialog_bg;
  border: $border;
  border-width: 0 0 1px 0;
  ul {
    padding: 1rem .5rem;
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    li:last-child {
      margin-bottom: 0!important
    }
  }
}
</style>
