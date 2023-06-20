<template>
    <div>
        <h3>Peter</h3>
        <h3>Bruce</h3>
        <h3>Tom</h3>
        <h3 v-bind="$attrs">{{ item }}</h3>
    </div>
</template>
<script>
export default {
    name: 'User2',
    inheritAttrs: false,
    props: {
        item: String,
        
    }
}
</script>
<style scoped>
</style>