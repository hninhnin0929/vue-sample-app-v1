<template>
    <div>
        
        <h1>Computed Property {{ dollors }}</h1>
        <!-- <h2>{{ (dollors * rupeeVal) - discount }}</h2> -->
        <h2>{{ getResult }}</h2>
        <h2>{{ getData() }}</h2>
    </div>
</template>

<script>

    export default {

        name: "ComputedProperty", 
        components: {

        },      
        data(){
            return{
                dollors: 100,
                rupeeVal: 70,
                discount: 10
            }
        },
        methods: {
            getData(){
                return (this.dollors * this.rupeeVal) - this.discount;
            }
        },
        computed: {
            getResult(){
                return (this.dollors * this.rupeeVal) - this.discount;
            }
        },
    }
</script>

<style scoped>
h1{
    color: orange
}
</style>

<!-- computed properties are cached based on their reactive dependencies. -->