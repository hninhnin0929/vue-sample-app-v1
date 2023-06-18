<template>
    <div>
        <h1>Send Data Child to Parent in Vue js 3</h1>
        <User1 :getUser="getUserName"/>
        <h1>User Name : {{ name }}</h1>
    </div>
</template>

<script>

    import User1 from './User1.vue'
    export default {

        name: "ChildtoParent", 
        components: {
            User1
        },      
        data(){
            return{
                name: "",
            }
        },
        methods: {
            getUserName(name){
                this.name = name;       
            }
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
</style>