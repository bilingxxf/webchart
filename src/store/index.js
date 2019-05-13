import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const origin = location.origin
const isOnline = !(origin.includes('localhost') || /\d+\./.test(origin))
const state = {
  isOnline,
  user: {
    name: '王健康',
    img: 'static/images/UserAvatar.jpg'
  },
  target: {
    name: '王毅刚',
    img: 'static/images/TargetAvatar.jpg'
  },
  currentDialog: [{
    name: '王毅刚',
    src: 'static/images/TargetAvatar.jpg',
    user: 2,
    content: '我在这边很大化金化金发货价放寒假啊发挥就回房间啊胡椒粉和骄傲架飞机啊画法几何',
    time: new Date().getTime()
  },
  {
    name: '王健康',
    src: 'static/images/UserAvatar.jpg',
    user: 1,
    content: ' 神经病啊',
    time: new Date().getTime()
  },
  {
    name: '王毅刚',
    src: 'static/images/TargetAvatar.jpg',
    user: 2,
    content: '我在这边很大化金化金发货价放寒假啊发挥就回房间啊胡椒粉和骄傲架飞机啊画法几何',
    time: new Date().getTime()
  },
  {
    name: '王健康',
    src: 'static/images/UserAvatar.jpg',
    user: 1,
    content: ' 神经病啊',
    time: new Date().getTime()
  },
  {
    name: '王毅刚',
    src: 'static/images/TargetAvatar.jpg',
    user: 2,
    content: '我在这边很大化金化金发货价放寒假啊发挥就回房间啊胡椒粉和骄傲架飞机啊画法几何',
    time: new Date().getTime()
  },
  {
    name: '王健康',
    src: 'static/images/UserAvatar.jpg',
    user: 1,
    content: ' 神经病啊',
    time: new Date().getTime()
  },
  {
    name: '王毅刚',
    src: 'static/images/TargetAvatar.jpg',
    user: 2,
    content: '我在这边很大化金化金发货价放寒假啊发挥就回房间啊胡椒粉和骄傲架飞机啊画法几何',
    time: new Date().getTime()
  },
  {
    name: '王健康',
    src: 'static/images/UserAvatar.jpg',
    user: 1,
    content: ' 神经病啊',
    time: new Date().getTime()
  },
  {
    name: '王毅刚',
    src: 'static/images/TargetAvatar.jpg',
    user: 2,
    content: '我在这边很大化金化金发货价放寒假啊发挥就回房间啊胡椒粉和骄傲架飞机啊画法几何',
    time: new Date().getTime()
  },
  {
    name: '王健康',
    src: 'static/images/UserAvatar.jpg',
    user: 1,
    content: ' 神经病啊',
    time: new Date().getTime()
  }
  ],
  previewImg: null
}

const actions = {}

const mutations = {
  insertDialog (state, pramas) {
    state.currentDialog.push(pramas)
  },
  setPreviewImg (state, src) {
    state.previewImg = src
  }
}

const getters = {
  currentDialog (state) {
    return state.currentDialog
  },
  previewImg (state) {
    return state.previewImg
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
