<template>
    <div>
        
        <h1 ref="user">User Component</h1>
    </div>
</template>

<script>

    export default {

        name: "User3", 
        //before destroy component
        beforeUnmount(){//i think it cannot be tested in vue3
            console.warn("beforeUnmount", this.$refs['user']);
        },
        //after destroy component
        unmounted(){
            console.warn("unmounted")
        },
        components: {

        },      
        data(){
            return{
                
            }
        },
        methods: {
            getData(){
                
            }
        },
    }
</script>

<style scoped>
h1{
    color: orange
}
</style>