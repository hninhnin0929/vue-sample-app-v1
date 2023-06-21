<template>
    <div>

        <!-- <h1>Slot</h1> -->
        <!-- <Child1><h1>Code Step by Step</h1></Child1>
        <Child1><h2>hnin</h2></Child1> 
        <Child1></Child1>-->


        <Child1>
            <template v-slot:header>
                <h1>Peter</h1>
            </template>
            <template v-slot:main>
                <p>Code Step By Step</p>
            </template>
            <template v-slot:footer>
                <button>Buy Now</button>
            </template>            
        </Child1>
        <Child1>
            <template v-slot:header>
                <h1>Sam</h1>
            </template>
            <template v-slot:main>
                <p>Code Step By Step</p>
            </template>
            <template v-slot:footer>
                <button>Buy Now</button>
            </template>            
        </Child1>
        <Child1>
            <template v-slot:header>
                <h1>Snow</h1>
            </template>
            <template v-slot:main>
                <p>Code Step By Step</p>
            </template>
            <template v-slot:footer>
                <button>Buy Now</button>
            </template>            
        </Child1>
    </div>
</template>

<script>
import Child1 from './Child1.vue'
export default {

    name: "Slots",
    components: {
        Child1
    },
    data() {
        return {

        }
    },
    methods: {
        getData() {

        }
    }
}
</script>

<style scoped>
h1 {
    color: orange
}
</style>