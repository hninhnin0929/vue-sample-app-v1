<template>
    <div>
        
        <h1>Simple Form</h1>
        <p>{{ form }}</p>
        <form>
            <label>Email : </label>
            <input type="text" placeholder="enter email" v-model="form.email"/>
            <br /><br />

            <label>Password : </label>
            <input type="password" placeholder="enter password" v-model="form.password"/>
            <br /><br />

            <button type="button" v-on:click="login">Login</button>

        </form>
        
    </div>
</template>

<script>


    export default {

        name: "Home", 
        components: {
            
        },      
        data(){
            return{
                form: {
                    email: "",
                    password: "",
                }
            }
        },
        methods: {
            login(){
                console.warn(this.form);
            }
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
</style>