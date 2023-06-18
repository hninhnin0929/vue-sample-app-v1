<template>
    <div>
        
        <h1>User1 Component</h1>
        <button v-on:click="getUser(userName)">Send User Name to Parent</button>
        
    </div>
</template>

<script>


    export default {

        name: "User1", 
        components: {
            
        },   
        props: {
            getUser: Function,
        }, 
        data(){
            return{
               userName: "Peter" 
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
    color: yellowgreen
}
</style>