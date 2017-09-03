import

const state = {
  tagList: '',
  articleList: ''
}

const mutations = {
  [GET_ARTICLE](state, data) {
    state.tagList = data.tagList
    state.articleList = data.articleList
  },
  [GET_ARTICLE_FAILURE](state) {
    return state
  }
}

export default {
  state,
  mutations
}
