import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, results){
      state.results = results
    },
    setPlaylist(state, playlist){
      state.playlist = playlist
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data=>{
        commit('setResults', data)
        console.log(data)
      })
    },
    getMyTunes({commit, dispatch}, myTunes){
      // this.getSongList = function (){
      //   return JSON.parse(JSON.stringify(songList))
      // }
      //this should send a get request to your server to return the list of saved tunes
      commit('myTunes', myTunes)
   
    },
    addToMyTunes({commit, dispatch}, track){
      //this will post to your server adding a new track to your tunes
    },
    removeTrack({commit, dispatch}, track){
      //Removes track from the database with delete
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
