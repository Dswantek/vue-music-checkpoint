<template>
  <div class="home text-center">
    <h1>GRAMM JAMM</h1>
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <form class="form-inline" @submit.prevent="getMusicByArtist">
            <div class="form-group">
              <input type="text" class="form-control" name="artist" placeholder="Search for Music" v-model="search">
              <button type="submit" class="btn btn-submit" id="search-button">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
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
    background: green;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 500px;
    min-width: 45%;
  }
</style>