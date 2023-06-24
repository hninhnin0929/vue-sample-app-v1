<template>
    <div>
        
        <h1>{{ profile }}'s Profile Page</h1>
    </div>
</template>

<script>
    // import { useRouter, useRoute } from 'vue-router'
    // useRoute cannot be used in vuejs2
    import { useRoute } from 'vue2-helpers/vue-router';

    export default {

        name: "Profile",
        mounted(){
            const route = useRoute();
            console.warn("route ", route.params.name);
            this.profile = route.params.name;
        }, 
        components: {

        },      
        data(){
            return{
                profile: '',
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