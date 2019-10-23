<template>
    <div>
        <p>您的性别是：{{this.$store.state.sex}}</p>
        <p>您的爱好是：{{this.$store.state.hobby}}</p>
        <p>简介：{{this.$store.state.description}}</p>
    </div>
</template>

<script>
    export default {
        name: "Result"
    }
</script>

<style scoped>

</style>