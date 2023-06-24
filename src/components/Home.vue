<template>
    <div>
        
        <h1>Call API</h1>
        <p v-for="item in list" :key="item.id">
           {{ item.id }}---{{ item.email }}---{{ item.first_name }} 
        </p>
    </div>
</template>

<script>

    import axios from "axios"

    export default {

        name: "Home", 
        async mounted(){
            let result = await axios.get("https://reqres.in/api/users?page=1")
            console.log("result=", result.data.data);
            this.list = result.data.data;
        },
        components: {

        },      
        data(){
            return{
                list: [],
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