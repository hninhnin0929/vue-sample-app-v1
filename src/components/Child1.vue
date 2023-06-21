<template>
    <div class="cart">

        <!-- <h1>{{ name }}</h1> -->
        <!-- <slot><h1>Default Data</h1></slot>
        <slot><h1>Default Data</h1></slot> -->
            
        <header>
            <slot name="header">Default Data</slot>
        </header>
        <content>
            <slot name="main">Default Data</slot>
        </content>
        <footer>
            <slot name="footer">Default Data</slot>
        </footer>

    </div>
</template>

<script>

export default {

    name: "Child1",
    props: {
        name: String,
    },
    components: {

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
.cart{
    border: 1px solid;
    width: 130px;
    padding: 20px;
    margin: 20px;
    text-align: center;
}
</style>