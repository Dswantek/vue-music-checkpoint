<template>
    <div class="container-fluid">
        <div class="row">
            <div class="heading col-xs-12">
                <h1>Your Playlist</h1>
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
        data() {
            return {
            
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
            demoteTrack(song, myTunes) {
                debugger
                // if (song.position < myTunes.length) {
                    song.position++
                    this.$store.dispatch('demoteTrack', song)
                // }
            }

        },
        computed: {
            myTunes() {
                return this.$store.state.myTunes
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
</style>