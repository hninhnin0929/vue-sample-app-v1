<template>
    <div>
        
        <h1>{{ text }}</h1>
        {{ tag }}
        <div v-html="tag">

        </div>
        
    </div>
</template>

<script>


    export default {

        name: "Home", 
        components: {
            
        },      
        data(){
            return{
                text: "hnin hnin",
                tag: "<h2>HNIN</h2>"
            }
        },
        methods: {
            getData(name){
                
            }
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
</style>