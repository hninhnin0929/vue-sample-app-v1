<template>
    <div>
        
        <h1>Teleport Components</h1>
        
        <teleport to="#footer">
            <Footer />
        </teleport>
    </div>
</template>

<script>

    import Footer from './Footer.vue';

    export default {

        name: "TeleportComponent", 
        components: {
            Footer
        },      
        data(){
            return{
                
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