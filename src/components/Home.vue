<template>
    <div>
        <h1 v-on:mousemove="getConsole()">Home Component {{ "Hello".length }}</h1>
        <button v-on:click="getData('button 1 click')">Click Me</button>
        <button v-on:dblclick="getData('button 1 click')">Click Me</button>
        <h2>{{ count }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Home",       
        data(){
            return{
               count: 0 
            }
        },
        methods: {
            getData(data){
               this.count = this.count + 1
            },
            getConsole(){
                this.count = this.count - 1
            }
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
</style>