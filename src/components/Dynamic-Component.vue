<template>
    <div>
        
        <h1>Dynamic components</h1>
        <button @click="tab='Java'">Load Java </button>
        <button @click="tab='Php'">Load Php </button>
        <button @click="tab='Node'">Load Node </button>
        
        <component :is="tab" />
    </div>
</template>

<script>
    import Java from './Java.vue'
    import Php from './Php.vue'
    import Node from './Node.vue'
    export default {

        name: "Dynamic-Component", 
        components: {
            Java,
            Php,
            Node
        },      
        data(){
            return{
                tab: 'Java',
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