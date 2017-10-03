import * as types from '../mutation-types.js'
import mockdata from '../../API/mockdata.js'

const state = {
  newmessage: {},
  messageList: []
}

const mutations = {
  [types.GET_MESSAGE] (state, messageList) {
    state.messageList = messageList
  },
  [types.GET_MESSAGE_FAILURE] (state) {
    return state
  }
}

const actions = {
  getMessageList ({commit}) {
    mockdata.getMessage(data => {
      commit(types.GET_MESSAGE, data)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
