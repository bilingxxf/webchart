<template>
  <div class="wrapper">
    <div class="preview-box">
      <div class="preview-header flex flex-align-items">
        <i class="icon circle close" @click="closePreview"></i>
      </div>
      <div class="img">
        <img :src="src" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'preview-img',
  props: ['src'],
  methods: {
    ...mapMutations([
      'setPreviewImg'
    ]),
    closePreview () {
      this.setPreviewImg(null)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    .preview-box {
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: .25rem;
      transform: translate3d(-50%, -50%, 0);
      @include boxshadow($shadow);
      .preview-header {
        height: 2.2rem;
        background: $light_bg;
        justify-content: flex-end;
        padding: 0 .5rem;
      }
      img {
        max-height: 40rem;
        display: block
      }
    }
  }
</style>
