<template>
    <div>
        
        <h1>POST Method API</h1>
        <input type="text" name="email" v-model="email"/> <br/><br/>
        <input type="password" name="password" v-model="password"/> <br/><br/>
        <button v-on:click="addUser">Add New User</button>
    </div>
</template>

<script>

    import axios from "axios"

    export default {

        name: "PostMethodAPI", 
        components: {

        },      
        data(){
            return{
              email: '',
              password: '',  
            }
        },
        methods: {
            async addUser(){
                console.warn("function called ", this.email, this.password);
                let result = await axios.post("http://localhost:3000/user",{
                    email : this.email,
                    password : this.password,
                })
                console.warn(result)
            }
        },
    }
</script>

<style scoped>
h1{
    color: orange
}

</style>