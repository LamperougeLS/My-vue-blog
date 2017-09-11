import * as types from '../mutation-types.js'

const state = {
  newmessage: { title: '', author: '', date: '' },
  messageList: [{ title: '文章saddasfdASDasfhoaihfoiahsfoiahsf', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
    { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosi', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
    { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfioh', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
    { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohao', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
    { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfioha', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
    { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosi', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
    { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifh', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' }
  ]
}

const mutations = {
  [types.GET_MESSAGE] (state, data) {
    state.messageList = data.messageList
  },
  [types.GET_MESSAGE_FAILURE] (state) {
    return state
  },
  [types.SET_NEW_MESSAGE] (state, data) {
    state.nemessage = data.newmessage
  },
  [types.SET_NEW_MESSAGE_FAILURE] (state, data) {
    return state
  }
}

export default {
  state,
  mutations
}
