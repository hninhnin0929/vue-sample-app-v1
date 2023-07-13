<template>
    <div>       
        <button @click="$emit('add', Math.random())">
            Add Math.random()
        </button>
    </div>
</template>

<script>


    export default {

        name: "CustomEventChild", 
        components: {
            
        },      
        data(){
            return{
             
            }
        },
        methods: {
           //Example
           handleChange(event){
            this.$emit("customChange", event.target.value.toUpperCase());
           }
        },
    }
</script>

<style scoped>
h1{
    color: orange
}

</style>