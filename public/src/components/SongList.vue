<template>
    <div>
            <form @submit.prevent="getMusicByArtist">
                    <input type="text" placeholder="Search for music" v-model="newSong.name">
                    {{newSong.name}}
                    <button type="submit">Search</button>
                </form>
    </div>



</template>

<script>
export default {
        data(){
            return {
                songlist: {}
            }
        },
        methods:{
            getSongByArtist(song){
                this.$store.dispatch('setResults', artist)
            }
    
        },
        computed: {
           
        }
    }


</script>

<style>


</style>