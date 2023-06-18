<template>
    <div>
        
        <h1>Student Name is : {{ name }}</h1>
        
    </div>
</template>

<script>


    export default {

        name: "Student", 
        props: {
            name: String,
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