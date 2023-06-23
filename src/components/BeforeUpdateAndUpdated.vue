<template>
    <div>
        
        <h1>beforeUpdate and updated</h1>
        <h1 ref="count">{{ counter }}</h1>
        <button v-on:click="counter=counter+1">update count</button>
    </div>
</template>

<script>

    export default {

        name: "BeforeUpdateAndUpdated", 
        components: {

        },      
        data(){
            return{
                counter: 0
            }
        },
        methods: {
            getData(){
                
            }
        },
        beforeUpdate(){
            console.log("beforeUpdate", this.$refs['count'].textContent)
        },
        updated(){
            console.log("updated", this.$refs['count'].textContent)
        },
    }
</script>

<style scoped>
h1{
    color: orange
}
</style>