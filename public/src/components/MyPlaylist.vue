<template>
    <div>
       
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
           
        }
    }


</script>

<style>


</style>