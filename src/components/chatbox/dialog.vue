<template>
  <div class="chat-box-dialog flex">
    <div class="chat-tools flex flex-align-items">
      <i class="icon file-send" @click="selectFile"></i>
      <input type="file" name="file" ref="file" accept="image/*" v-show="false" @change="selectedFile" />
    </div>
    <div contenteditable="true" ref="textarea" class="textarea"></div>
    <p class="place-holder">请输入文字...</p>
    <button class="btn u-send-msg" @click="sendMessage"></button>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapMutations } from 'vuex'
import Base64 from '@/assets/js/base64'
export default {
  data () {
    return {
      placeholder: null,
      fileString: null
    }
  },
  methods: {
    ...mapMutations([
      'insertDialog'
    ]),
    sendMessage () {
      const innerHTML = this.fileString || this.$refs.textarea.innerHTML
      if (!innerHTML) return
      this.insertDialog({
        name: '王健康',
        src: 'static/images/UserAvatar.jpg',
        user: 1,
        content: innerHTML,
        time: new Date().getTime()
      })
      this.messageClear()
      if (!$(this.$refs.textarea).is(':focus')) this.placeholder.show()
    },
    messageClear () {
      this.fileString = null
      this.$refs.textarea.innerHTML = null
    },
    slider (time) {
      $('.textarea').slideBottom({ time })
    },
    base64Result (res) {
      if (!res.base64) return
      const { compress64, base64 } = res
      const newImg = new Image()
      newImg.src = compress64
      newImg.dataset.src = base64
      newImg.style.display = 'block'
      return newImg
    },
    selectFile () {
      this.$refs.file.click()
    },
    selectedFile (e) {
      const file = this.$refs.file.files[0]
      const isImage = /image\/.*/.test(file.type)
      if (isImage) {
        this.toBase64.base64(file).then(res => {
          this.fileString = $(this.base64Result(res))[0].outerHTML
          this.sendMessage()
        })
      } else {
        alert('暂不支持文件上传')
      }
    }
  },
  mounted () {
    const { textarea } = this.$refs
    this.toBase64 = new Base64({width: 200})
    this.placeholder = $('.place-holder')

    textarea.onpaste = (event) => {
      if (!event.clipboardData && !event.clipboardData.items) return
      for (let item of event.clipboardData.items) {
        if (item.kind === 'file') {
          this.toBase64.base64(item.getAsFile()).then(res => {
            $(textarea).append(this.base64Result(res))
            this.slider()
          })
          return false
        }
      }
    }

    textarea.onfocus = (e) => {
      this.placeholder.hide()
    }

    this.placeholder.on('click contextmenu', function(e) {
      $(this).hide()
      textarea.focus()
    })

    textarea.onblur = (e) => {
      if (!textarea.innerHTML) this.placeholder.show()
    }

    textarea.onkeydown = (e) => {
      const { innerHTML } = textarea
      if (e.keyCode === 13) {
        if (innerHTML && this.onShift) return true
        this.sendMessage()
        return false
      } else if (e.keyCode === 16) {
        this.onShift = true
      }
    }

    textarea.onkeyup = (e) => {
      if (e.keyCode === 16) {
        this.onShift = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-box-dialog {
  position: relative;
  flex: 0 1 10rem;
  flex-direction: column;
  background: $white;
  border: $border;
  border-width: 0 0 0 1px;
  .chat-tools {
    flex: 0 1 2.8rem;
  }
  .icon {
    margin-left: 1rem;
  }
  .textarea, .place-holder {
    width: 100%;
    flex: 0 1 7.2rem;
    padding: 0 1rem;
    display: block;
    resize: none;
    box-sizing: border-box;
    outline: none;
    font-size: $levelTwoFontSize;
    overflow-y: auto;
    word-break: break-all;
    line-height: 1.5;
  }

   .place-holder {
    color: $levelThreeTextColor;
    position: absolute;
    top: 2.8rem;
    margin: 0;
    left: 0
  }

  .u-send-msg {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    border: 0;
    outline: none;
    @include setbackground('../../../static/images/send_msg.png');
    cursor: pointer;
    &:hover {
      @include setbackground('../../../static/images/send_msg_hover.png');
    }
  }
}
</style>
