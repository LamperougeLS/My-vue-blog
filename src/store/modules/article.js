import

const state = {
  tags: '',
  articleList: ''
}

const mutations = {
  [GET_ARTICLE](state, data) {
    state.tags = data.tags
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
