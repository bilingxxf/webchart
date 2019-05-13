<template>
  <li class="flex" :class="data.user === 1 ? 'active' : ''">
    <div class="flex-item user-item">
      <div class="avatar" :style="{background: 'url('+data.src+') 50% / 100% no-repeat'}"></div>
      <p class="time">{{ data.time | dialogTime }}</p>
    </div>
    <div class="content-item">
      <div class="dialog-item" v-html="data.content"></div>
    </div>
  </li>
</template>

<script>
import $ from 'jquery'
import { mapMutations } from 'vuex'
export default {
  name: 'dialog-item',
  props: ['data'],
  methods: {
    ...mapMutations([
      'setPreviewImg'
    ])
  },
  mounted () {
    const _this = this
    $('.dialog-item img').on('click', function () {
      _this.setPreviewImg(this.dataset.src)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .flex {
    margin-bottom: 1rem;
    &.active {
      justify-content: flex-end;
      .content-item {
        .dialog-item {
          border-radius: 1rem 0 1rem 1rem;
          background:$textSelectBg;
          color: $white;
          @include boxshadow($textSelectBg);
        }
      }

      .user-item {
        order: 2
      }
    }
    .user-item {
      flex: 0 1 3.3rem;
    }

    .content-item {
      max-width: 24rem;
      .dialog-item {
        background: $white;
        padding: .5rem 1rem;
        line-height: 1.5rem;
        font-size: $levelTwoFontSize;
        color: $levelTwoTextColor;
        border-radius: 0 1rem 1rem 1rem;
        word-break: break-all;
        @include boxshadow($shadow)
      }
    }

    .avatar {
      width: 2.4rem;
      height: 2.4rem;
      margin: 0 .5rem;
      border-radius: .25rem
    }

    .time {
      font-size: $baseFont;
      color: $levelThreeTextColor;
      margin-top: .3rem;
      line-height: 1;
      text-align: center;
      overflow: hidden;
    }

    p {
      margin: 0;
    }
  }
</style>
