<template>
  <div class="home text-center">
    <div class="heading">
      <h1>The Jambox 3000</h1>
    </div>
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="container-fluid">
      <div class="row text-center">
        <div class="col-xs-12">
          <form class="form-inline" @submit.prevent="getMusicByArtist">
            <div class="form-group">
              <input type="text" class="form-control" name="artist" placeholder="Search for Music" v-model="search">
              <button type="submit" class="btn btn-submit" id="search-button">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-sm-6">
          <song-list class="songlist"></song-List>
        </div>
        <div class="col-sm-6">
          <my-playlist class="myPlaylist"></my-playlist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyPlaylist from './MyPlaylist'
  import SongList from './SongList'
  export default {
    name: 'home',
    components: {
      MyPlaylist,
      SongList
    },
    data(){
      return{
        search:''
      }
    },
    methods: {
            getMusicByArtist() {
                this.$store.dispatch('getMusicByArtist', this.search)
            },
        },
        computed: {
            results() {
                return this.$store.state.results
            }

        }
  }
</script>


<style>
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
  }

  .itunes {
    display: inline-block;
    min-height: 500px;
    min-width: 45%;
  }
.heading{
  font-family: 'Rock Salt', cursive;
  margin: 5vh;
}
#search-button{
  color: black;
}
.song-card{
        border: white 5px;
    }

</style>