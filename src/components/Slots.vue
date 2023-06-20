<template>
    <div>
        
        <h1>Slot</h1>
        <Child1><h1>Code Step by Step</h1></Child1>
        <Child1><h2>hnin</h2></Child1>
        <Child1></Child1>
    </div>
</template>

<script>
    import Child1 from './Child1.vue'
    export default {

        name: "Slots", 
        components: {
            Child1
        },      
        data(){
            return{
                
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