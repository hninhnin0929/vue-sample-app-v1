<template>
    <div>
        
        <h1>beforeCreated and created {{ name }}</h1>
    </div>
</template>

<script>

    export default {

        name: "BeforeCreatedAndCreated", 
        components: {

        },      
        data(){
            console.warn("Data is created")
            return{
                name: 'Hnin',
            }
        },
        methods: {
            getData(){
                
            }
        },
        beforeCreate(){
            
            alert("beforeCreated");
        },
        created(){
            this.name = "Snow";
            alert("created")
        },
    }
</script>

<style scoped>
h1{
    color: orange
}
</style>