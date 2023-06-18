<template>
    <div>
        
        <h1>Teacher Name is : {{ name }}</h1>
        
    </div>
</template>

<script>


    export default {

        name: "Teacher", 
        props: {
            // name: String,
        },
        components: {
            
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
    color: yellowgreen
}
</style>