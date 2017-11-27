import Vue from 'vue'
import Router from 'vue-router'
import SongList from '@/components/SongList'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gramm Jamm',
      component: SongList
    }
  ]
})
