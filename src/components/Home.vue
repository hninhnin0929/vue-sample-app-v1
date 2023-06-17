<template>
    <div>
        <h2>Get input field value</h2>
        <input type="text" placeholder="enter email" 
            v-model="email"/>
        <br/>
        <input type="password" placeholder="enter password" 
            v-model="password"/>
        <br/><br/>
        <button type="button" v-on:click="getData()">Get Data</button>
    </div>
</template>

<script>
    export default {
        name: "Home",       
        data(){
            return{
               email: null,
               password: null
            }
        },
        methods: {
            getData(){
               console.warn("values : ", this.email, this.password);
            },
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
</style>