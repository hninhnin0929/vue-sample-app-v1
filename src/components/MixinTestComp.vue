<template>
    <div>       
        <h1>MixinTestComp</h1>
    </div>
</template>

<script>

    import mixin from "./mixin"
    export default {

        name: "MixinTestComp", 
        mixins: [mixin],
        created: function () {
            console.log(this.$data);
            this.displayMessage();
        },
        components: {
            
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