<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <h1>Search Section</h1>
                <form class="form-inline" @submit.prevent="getMusicByArtist">
                    <div class="form-group">
                        <input type="text" class="form-control" name="artist" placeholder="Search for Music" v-model="results.artist">
                        <button type="submit" class="btn btn-submit" id="search-button">Search</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div v-for="data in results">
                <div class="song-card col-xs-12 text-center black-border">
                    <h4>{{song.title}}</h4>
                    <h4>
                        <img :src="song.albumArt">
                    </h4>
                    <h4>{{song.artist}}</h4>
                    <h4>{{song.collection}}</h4>
                    <h4>${{song.price}}</h4>
                    <h4>
                        <i class="glyphicon glyphicon-plus" @click="addToMyTunes(song)"></i>
                        <audio controls class="audio">
                            <source :src="song.preview" type="audio/ogg">
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
                
            }
        },
        methods: {
            getMusicByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            addToMyTunes(song) {
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
</style>