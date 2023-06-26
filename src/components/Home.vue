<template>
    <div>
        
        <h1>HOME</h1>
        <base-button  class="info"><slot></slot></base-button>
    </div>
</template>

<script>

    import BaseButton from './base-button.vue';

    export default {

        name: "Home", 
        components: {
            BaseButton
        },      
        data(){
            return{
             
            }
        },
        methods: {
           
        },
    }
</script>

<style scoped>
h1{
    color: orange
}

</style>