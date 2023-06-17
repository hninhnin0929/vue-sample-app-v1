<template>
    <div>
        
        <h1>Pass Data to Child Component</h1>
        <Child :name="name" :data="user" :getData="getData"/>

    </div>
</template>

<script>
    import Child from './Child.vue'

    export default {

        name: "Home", 
        components: {
            Child
        },      
        data(){
            return{
                name: 'bruce',
                user: {name: 'bruse', email: 'bruce@test.com'}
            }
        },
        methods: {
            getData(){
               alert("function called");
            },
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
</style>