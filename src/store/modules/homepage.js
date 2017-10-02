import * as types from '../mutation-types.js'
import mockdata from '../../API/mockdata.js'

const state = {
  tagList: [],
  articleList: []
}

const mutations = {
  [types.GET_ARTICLE] (state, artlist) {
    state.articleList = artlist
  },
  [types.GET_TAGS] (state, taglist) {
    state.tagList = taglist
  },
  [types.GET_ARTICLE_FAILURE] (state) {
    return state
  }
}

const actions = {
  getArticleList ({commit}) {
    mockdata.getArtlist(data => {
      commit(types.GET_ARTICLE, data)
    })
  },

  getTagList ({commit}) {
    mockdata.getTags(data => {
      commit(types.GET_TAGS, data)
    })
  }

}

export default {
  state,
  mutations,
  actions
}
