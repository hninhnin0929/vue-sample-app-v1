<template>
    <div>
        
        <!-- <h1>{{ name }}</h1> -->
        <slot><h1>Default Data</h1></slot>
    </div>
</template>

<script>

    export default {

        name: "Child1", 
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
    color: orange
}
</style>