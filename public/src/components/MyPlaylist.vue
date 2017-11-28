<template>
    <div class="container-fluid">
        <div class="row">
            <div class="heading col-xs-12">
                <h1>Your Playlist</h1>
            </div>
        </div>
        <div class="row playlist-content text-center">
            <div class="col-xs-12 col-md-6">
                <button type="button" class="btn btn-info btn-md text-center" style="margin-top: 1.5rem" data-toggle="modal" data-target="#playlistModal">Create a Playlist</button>
            </div>

            <!-- BEGIN MODAL -->
            <div id="playlistModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal Playlist Create WINDOW -->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title text-center">Create A New Playlist</h4>
                        </div>
                        <!-- Playlist INPUT FORM -->
                        <div class="modal-body">
                            <label for="PlaylistName">Playlist Name</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Type the playlist name here">
                            </div>
                            <!-- USERNAME INPUT FORM -->
                            <label for="Description">Description</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="What is this playlist for?">
                            </div>
                            <!-- SIGN UP BUTTON -->
                            <button type="button" class="btn btn-primary navbar-btn btn-center">Create Playlist</button>
                        </div>
                        <!-- MODAL CLOSE -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
            <!-- <form @submit.prevent="addNewPlaylist">
                <input type="text" placeholder="Name" v-model="newPlaylist.name"> {{newPlaylist.name}}
                <button type="submit">Create Playlist</button>
            </form> -->
            <div class="col-xs-12 col-md-6">
                <form @submit.prevent="setActivePlaylist">
                    <select @change="setActivePlaylist" v-model="selectedPlaylist">
                        <option :value="playlist" v-for="playlist in playlists">{{playlist.name}}</option>
                    </select>
                </form>
            </div>
        </div>
        <div class="row">
            <div v-for="song in myTunes">
                <div class="song-card col-xs-12 text-center" style="border: black">
                    <h4>
                        <img :src="song.albumArt">
                    </h4>
                    <h3>{{song.title}}</h3>
                    <h4>{{song.artist}}</h4>
                    <h4>{{song.album}}</h4>
                    <h4>${{song.price}}</h4>
                    <h4>
                        <i class="glyphicon glyphicon-trash" @click="removeFromPlaylist(song)"></i>
                        <audio controls class="audio">
                            <source :src="song.preview" type="audio/ogg">
                        </audio>
                    </h4>
                    <div class="row">
                        <div class="col-xs-4">
                            <i class="glyphicon glyphicon-chevron-up" @click="promoteTrack(song)"></i>
                        </div>
                        <div class="col-xs-4">
                            <p>
                                {{song.position}}
                            </p>
                        </div>
                        <div class="col-xs-4">
                            <i class="glyphicon glyphicon-chevron-down" @click="demoteTrack(song)"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>



</template>

<script>
    export default {
        name: 'MyPlaylists',
        props: ["openPlaylist"],
        data() {
            return {
                selectedPlayer: {},
                newPlaylist: {}
            }
        },
        mounted() {
            this.$store.dispatch('getMyTunes')

        },
        methods: {
            addToMyTunes(song) {
                this.$store.dispatch('addToMyTunes', song)
            },
            removeFromPlaylist(song) {
                this.$store.dispatch('removeFromPlaylist', song)
            },
            promoteTrack(song) {
                if (song.position > 0) {
                    song.position--
                    this.$store.dispatch('promoteTrack', song)
                }
            },
            demoteTrack(song) {
                if (song.position < this.$store.state.playlist._id.length - 1) {
                    song.position++
                    this.$store.dispatch('demoteTrack', song)
                }
            }

        },
        computed: {
            myTunes() {
                return this.$store.state.myTunes
            },
            playlists() {
                return this.$store.state.playlists
            }


        }
    }


</script>

<style>
    body {
        background-color: black;
        color: white;
    }

    .heading {
        font-family: 'Rock Salt', cursive;
    }

    .song-card {
        border: white 5px;
    }

    .playlist-content {
        color: black;
    }
</style>