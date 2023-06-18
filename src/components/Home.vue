<template>
    <div>
        
        <h1>Reuse Component</h1>
        <!-- <User/> -->
        <ul>
            <li v-for="item in users" :key="item.name">
                <!-- {{ item.name }} ---{{ item.emai }} -->
                <User :data="item" :getData="getData"/>

            </li>
        </ul>
    </div>
</template>

<script>
    import Child from './Child.vue'
    import User from './User.vue'

    export default {

        name: "Home", 
        components: {
            Child,
            User
        },      
        data(){
            return{
                users: [
                    {name: 'hnin', emai: "hnin@gmail.com"},
                    {name: 'sam', emai: "sam@gmail.com"},
                    {name: 'john', emai: "john@gmail.com"},
                ]
            }
        },
        methods: {
            getData(name){                
                alert("User Name: "+ name);
            }
        }
    }
</script>

<style scoped>
h1{
    color: yellowgreen
}
</style>