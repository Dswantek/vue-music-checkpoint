import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: [],
    playlists: [],
    activePlaylist: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results.results
    },
    // setPlaylist(state, songs) {
    //   songs.sort(function (a, b) {
    //     return a.position - b.position;
    //   })
    //   state.myTunes = songs
    // },
    setPlaylist(state, songs) {
      songs.sort(function (a, b) {
        return a.position - b.position;
      })
      state.activePlaylist._id = songs
    },
    setActivePlaylist(state, playlist) {
      // vue.set(state, 'activePlaylist', playlist)
      state.activePlaylist = playlist
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(data => {

        // return {
        //   title: data.trackName,
        //   albumArt: data.artworkUrl100,
        //   artist: data.artistName,
        //   collection: data.collectionName,
        //   price: data.collectionPrice,
        //   preview: data.previewUrl
        // }
        // })
        commit('setResults', data)
        console.log(data)
      })
    },

    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      var url = 'http://localhost:3000/api/songs'

      $.getJSON('http://localhost:3000/api/songs')
        .then(songs => {

          commit('setPlaylist', songs)
          console.log(songs)
        })

    },

    addToMyTunes({ commit, dispatch }, song) {
      var url = 'http://localhost:3000/api/songs'
      //this will post to your server adding a new track to your tunes
      var song = {
        title: song.trackName,
        albumArt: song.artworkUrl100,
        artist: song.artistName,
        album: song.collectionName,
        price: song.trackPrice,
        preview: song.previewUrl,
        position: song.position
        // playlistId: 
      }
      $.post(url, song)
        .then(res => {
          dispatch('getMyTunes')
        })
    },

    removeFromPlaylist({ commit, dispatch }, song) {
      //Removes track from the database with delete
      var url = 'http://localhost:3000/api/songs/'
      $.ajax({
        method: 'DELETE',
        url: url + song._id
      }).then(res => dispatch('getMyTunes'))
      console.log(song._id)
    },

    promoteTrack({ commit, dispatch }, song) {
      //this should increase the position / upvotes and downvotes on the track
      $.ajax({
      url: 'http://localhost:3000/api/songs/' + song._id,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(song)
    })
    .then(res => {
      console.log(res)
      dispatch('getMyTunes')
    })

    },

    demoteTrack({ commit, dispatch }, song) {
      //this should decrease the position / upvotes and downvotes on the track
      $.ajax({
      url: 'http://localhost:3000/api/songs/' + song._id,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(song)
    })
    .then(res => {
      dispatch('getMyTunes')
    })

    }

  }
})


export default store
