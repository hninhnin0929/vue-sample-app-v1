<template>
    <div>
        <button v-on:click="show=false">Hide</button>
        <h1>beforeUnmount and unmounted</h1>
        <User3 v-if="show"/>
    </div>
</template>

<script>
    import User3 from './User3.vue'
    export default {

        name: "BeforeUnmountAndUnmounted", 
        components: {
            User3,
        },      
        data(){
            return{
                show: true,
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