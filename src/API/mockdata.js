const tagList = [{ name: '全部', id: 'all' },
  { name: 'VUE', id: 'vue' },
  { name: 'REACT', id: 'react' },
  { name: '热门', id: 'hot' },
  { name: 'ES6', id: 'es6' },
  { name: 'WEBPACK', id: 'webpack' },
  { name: 'REACT', id: 'react' },
  { name: '热门', id: 'hot' },
  { name: 'ES6', id: 'es6' }
]

const articleList = [{ title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfaasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsfasfasifjoasjfapofjpassdasdaasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsdasdafjasf' },
  { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'aasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsfhoaihfoiahasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpasfjsdsdsadaasf' },
  { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfishfoiasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfasfhfasfasfasfasifjoasjfapofjpasdasdasasfjasf' },
  { title: '文章saddasfdASD', tag: 'ASDASD', pageview: '1233', date: '2017-01-01', abstract: 'asfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpaasdasdasdsfasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfasfhoaihfoiahsfoiahsfiohaosifhoaisjfoiashfoasfhoaishfoiasfhfasfasfasfasifjoasjfapofjpassdasdasdasdafjasfjasf' }
]

const messageList = [{ title: '1文章saddasfdASDasfhoaihfoiahsfoiahsf', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
  { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosi', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
  { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfioh', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
  { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohao', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
  { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfioha', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
  { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosi', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' },
  { title: '文章saddasfdASDasfhoaihfoiahsfoiahsfiohaosifh', author: 'name', date: '2017-1-1', detail: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字' }
]

export default {
  getTags (cb) {
    setTimeout(() => cb(tagList), 100)
  },

  getArtlist (cb) {
    setTimeout(() => cb(articleList), 100)
  },

  getMessage (cb) {
    setTimeout(() => cb(messageList), 100)
  }
}
