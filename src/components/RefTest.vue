<template>
    <div>
        
        <h1>Ref in Vue js</h1>
        <input type="text" ref="input"/>
        <button v-on:click="getData">Click Me</button>
    </div>
</template>

<script>


    export default {

        name: "RefTest", 
        components: {
            
        },      
        data(){
            return{
                
            }
        },
        methods: {
            getData(){
                this.$refs.input.focus();
                this.$refs.input.value = "Hi";
                this.$refs.input.style.color = "red";
                console.warn(this.$refs.input.value);
            }
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
</style>