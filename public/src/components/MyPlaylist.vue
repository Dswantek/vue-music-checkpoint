<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <h1>Playlist Selection</h1>
            </div>
        </div>
       
    </div>



</template>

<script>
export default {
        data(){
            return {
                playlists: {}
            }
        },
        methods:{
            addToPlaylist(myTunes){
                this.$store.dispatch('addSong', myTunes)
            },
            removeFromPlaylist(myTunes){
                this.$store.dispatch('removeSong', myTunes)
            }
    
        },
        computed: {
            myPlaylists(){
                return this.$store.state.myPlaylists
            }
           
        }
    }


</script>

<style>


</style>