<template>
    <div>
        
        <h1>Watcher</h1>
        <h1>{{ count }}</h1>
        <button v-on:click="count=count+1"> + </button>
        <button v-on:click="count=count-1"> - </button>
    </div>
</template>

<script>

    export default {

        name: "Watchers", 
        components: {

        },      
        data(){
            return{
                count: 0,
            }
        },
        watch: {
            count(val, prev){
                if(val > 10 && val > prev){
                    this.count = 0
                }
            }
        },
        methods: {
            getData(){
                
            }
        }
    }
</script>

<style scoped>
h1{
    color: orange
}
</style>