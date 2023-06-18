<template>
    <div>
        
        <h1>Props in Vue js 3</h1>
        <Student :name="name" />
        <Teacher :name="name" />
    </div>
</template>

<script>

    import Student from './Student.vue'
    import Teacher from './Teacher.vue'

    export default {

        name: "Home", 
        components: {
            Student,
            Teacher
        },      
        data(){
            return{
                name: "Bruce"
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
    color: yellowgreen
}
</style>