<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 heading">
                <h1>Search Results</h1>
                <!-- <form class="form-inline" @submit.prevent="getMusicByArtist">
                    <div class="form-group">
                        <input type="text" class="form-control" name="artist" placeholder="Search for Music" v-model="search">
                        <button type="submit" class="btn btn-submit" id="search-button">Search</button>
                    </div>
                </form> -->
            </div>
        </div>
        <div class="row">
            <div v-for="song in results">
                <div class="song-card col-xs-12 text-center" style="border: black">
                    <h4>
                        <img :src="song.artworkUrl100">
                    </h4>
                    <h3>{{song.trackName}}</h3>
                    <h4>{{song.artistName}}</h4>
                    <h4>{{song.collectionName}}</h4>
                    <h4>${{song.trackPrice}}</h4>
                    <h4>
                        <i class="glyphicon glyphicon-plus" @click="addToMyTunes(song)"></i>
                        <audio controls class="audio">
                            <source :src="song.previewUrl" type="audio/ogg">
                        </audio>
                    </h4>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
    export default {
        name: 'SongList',
        data() {
            return {
                // search: '',

            }
        },
        methods: {
            // getMusicByArtist() {
            //     this.$store.dispatch('getMusicByArtist', this.search)
            // },
            addToMyTunes(song) {
                song.position = this.$store.state.myTunes.length
                this.$store.dispatch('addToMyTunes', song)
            }

        },
        computed: {
            results() {
                return this.$store.state.results
            }

        }
    }


</script>

<style>
    .heading {
        font-family: 'Rock Salt', cursive;
    }
</style>