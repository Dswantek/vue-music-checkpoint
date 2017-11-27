import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SongList from '@/components/SongList'
import MyPlaylist from '@/components/MyPlaylist'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Gramm Jamm',
            component: Home
        },
        {
            path: '/searchResults',
            name: 'SongList',
            component: SongList
        },
        {
            path: '/playlists',
            name: 'MyPlaylist',
            component: MyPlaylist
        }
    ]
})
