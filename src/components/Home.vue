<template>
    <div>
        <h1>Home Component {{ "Hello".length }}</h1>
        <h1>Email : {{ getData().email }}</h1>
        <h1>Name : {{ getData().name }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Home",       
        data(){
            return{
                email: "anil@test.com", 
            }
        },
        methods: {
            getData(){
                return {
                    name: "hnin",
                    email: this.email
                }
            }
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
</style>