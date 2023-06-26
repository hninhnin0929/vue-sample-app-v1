<script setup>
</script>
<script>
    export default {
        name: "BaseButton",
        inheritAttrs: false,
        props: ["message"],
        
    }
</script>
<template>
    
    <!-- <div>
        <h3>Information About The Button</h3>
        <button v-bind="$attrs" >This is a button</button>
    </div> -->
    <!-- <button v-bind="$attrs" >This is a button</button> -->
    <button :class="$attrs.class" >This is a button</button>
</template>
<style scoped>
    .info{
        color: green;
        background: orange;
    }
    [data-size-samll]{
        font-size: 0.5rem;
    }
</style>