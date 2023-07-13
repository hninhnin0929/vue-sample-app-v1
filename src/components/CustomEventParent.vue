<template>
    <div>       
        <h1>CustomEventParent</h1>
        <CustomEventChild @add="(i) => count += i"/>
        <p>Count: {{ count }}</p>
    </div>
</template>

<script>

    import { ref } from 'vue';
    import CustomEventChild from './CustomEventChild.vue';
    // const count = ref(0)

    export default {

        name: "CustomEventParent", 
        components: {
            CustomEventChild
        },      
        data(){
            return{
                count: ref(0)
            }
        },
        methods: {
           
        },
    }
</script>

<style scoped>


</style>