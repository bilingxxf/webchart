// import * as io from 'socket.io-client'

const origin = location.host
const isOnline = !(origin.includes('localhost') || /\d+\./.test(origin))
const uri = `ws://${isOnline ? origin : '172.16.18.201:8081'}/websocket`

class Socket {
  constructor () {
    // this.socket_uri = isOnline ? origin : 'http://172.16.18.201:8081'
    this.socket_uri = uri
  }

  init () {
    this.socket = new WebSocket(this.socket_uri)
    this.socket.onopen = function (evt) {
      this.send('sub_market.abc')
    }
  }

  listeners (pramas) {
    if (!pramas.constructor === Object) return
    this.socket.onmessage = function (evt) {
      for (let [key, callback] of Object.entries(pramas)) {
        this.socket.onmessage(key, callback)
      }
    }
  }

  send (pramas) {
    this.socket.emit('sub', pramas)
  }

  destroy () {
    this.socket.close()
  }
}

export default new Socket()
