<template>
  <div class="home text-center">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header col-xs-12 col-md-1 text-center">
          <!-- "BRAND" IMAGE -->
          <a class="navbar-brand">
            <img class="nav-img" alt="Brand" src="https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=46703060">
          </a>
        </div>

        <!-- WEBSITE NAME -->
        <div class="navbar-text col-xs-12 col-md-3" style="font-family: 'Rock Salt', cursive">
          <h3>Jambox 3000</h3>
        </div>
        <!-- FORMS -->

        <!-- Trigger the sign-up modal with a button -->
        <button type="button" class="btn btn-info btn-md navbar-right col-xs-12-offset-1 col-md-1" style="margin-top: 1.5rem" data-toggle="modal"
          data-target="#myModal">Sign Up</button>

        <div class="navbar-form navbar-right col-xs-12 col-md-7">
          <form type="submit" onsubmit="login">
            <!-- USERNAME INPUT FORM -->
            <div class="form-group">
              <input name="email" type="text" class="form-control" placeholder="Email">
            </div>
            <!-- PASSWORD INPUT FORM -->
            <div class="form-group">
              <input name="password" type="password" class="form-control" placeholder="Password">
            </div>
            <!-- LOGIN BUTTON -->
            <div class="form-group">
              <button type="submit" class="btn btn-default navbar-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </nav>

    <!-- BEGIN MODAL -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal SIGN UP WINDOW -->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title text-center">Sign Up for a Free Account</h4>
          </div>
          <!-- EMAIL INPUT FORM -->
          <div class="modal-body">
            <label for="Email">Email:</label>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="john.doe@gmail.com">
            </div>
            <!-- USERNAME INPUT FORM -->
            <label for="Username">Username:</label>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Username">
            </div>
            <!-- PASSWORD INPUT FORM -->
            <label for="Password">Password:</label>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Password">
            </div>
            <!-- SIGN UP BUTTON -->
            <button type="button" class="btn btn-primary navbar-btn btn-center">Sign Up</button>
          </div>
          <!-- MODAL CLOSE -->
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>

    <!-- End of Navbar, Start of application -->
    <div class="main-heading">
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
          <my-playlist class="myPlaylist" :openPlaylist="activePlaylist"></my-playlist>
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
    data() {
      return {
        search: ''
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

  .main-heading {
    font-family: 'Rock Salt', cursive;
    margin: 5vh;
    margin-top: 150px;

  }

  .heading {
    font-family: 'Rock Salt', cursive;
    margin: 5vh;
  }

  .modal {
    color: black;
  }

  #search-button {
    color: black;
  }

  .song-card {
    border: white 5px;
  }
  .nav-img{
    background: transparent;
    width: 5vw;
    height: 10vh;
  }

</style>