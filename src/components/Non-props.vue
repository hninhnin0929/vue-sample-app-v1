<template>
    <div>
        
        <h1>Non-Props Data</h1>
        <User2 item="some data" name="user-cmp"/>
    </div>
</template>

<script>

    import User2 from './User2.vue'
    export default {

        name: "Non-props", 
        components: {
            User2
        },      
        data(){
            return{
                
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