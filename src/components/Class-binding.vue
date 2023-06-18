<template>
    <div>
        
        <h1>CSS binding</h1>
        <h2 class="staticClass" :class="adjustStyle">Home Component</h2>
        <button v-on:click=" colorfull =!colorfull">Apply Style</button>
    </div>
</template>

<script>


    export default {

        name: "Class-binding", 
        components: {
            
        },      
        data(){
            return{
               colorfull : true 
            }
        },
        computed: {
            adjustStyle(){
                return {
                    green: this.colorfull,
                    err: true,
                    other: false
                }
            }
        },
        methods: {
            getData(name){
                
            }
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
.green{
    background-color: green;
    width : 200px;
    padding: 10px;
    color: #fff;
}
.staticClass{
    color: blue;
}
.err{
    color: red;
}
.other{
    font-size: 70px;
}
</style>