import * as types from '../mutation-types.js'

const state = {
  tagList: [{ name: '全部', id: 'all' },
    { name: 'VUE', id: 'vue' },
    { name: 'REACT', id: 'react' },
    { name: '热门', id: 'hot' },
    { name: 'ES6', id: 'es6' },
    { name: 'WEBPACK', id: 'webpack' },
    { name: 'REACT', id: 'react' },
    { name: '热门', id: 'hot' },
    { name: 'ES6', id: 'es6' }
  ],
  articleList: [{ title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfaasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsfasfasifjoasjfapofjpassdasdaasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsdasdafjasf' },
    { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'aasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsfhoaihfoiahasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpasfjsdsdsadaasf' },
    { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfishfoiasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfasfhfasfasfasfasifjoasjfapofjpasdasdasasfjasf' },
    { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpaasdasdasdsfasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfjasf' }
  ]
}

const mutations = {
  [types.GET_ARTICLE] (state, data) {
    state.tagList = data.tagList
    state.articleList = data.articleList
  },
  [types.GET_ARTICLE_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
