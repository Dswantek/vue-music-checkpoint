<template>
  <div class="home">
    <h1>GRAMM JAMM</h1>
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <my-playlist class="myPlaylist"></my-playlist>
        </div>
        <div class="col-sm-6">
          <song-list class="songlist"></song-List>
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
    data() {
      return {
        components: {
          MyPlaylist,
          SongList
        }
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