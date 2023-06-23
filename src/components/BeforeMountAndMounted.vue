<template>
    <div>
        
        <h1>beforeMount and mounted {{ name }}</h1>
    </div>
</template>

<script>

    export default {

        name: "BeforeMountedAndMounted", 
        components: {

        },      
        data(){
            return{
                name: 'Hnin'
            }
        },
        methods: {
            getData(){
                
            }
        },
        beforeMount(){
            console.warn("beforeMount", this.$el)
        },
        mounted(){
            console.warn("mounted", this.$el)
        },
    }
</script>

<style scoped>
h1{
    color: orange
}
</style>