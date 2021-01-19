<template>
    <div class="home">
        <p>这是 home 页面</p>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <p>dasdada</p>
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
    name: "home",
    data() {
        return {}
    },
    components: {
        HelloWorld
    },
    watch: {},
    mounted() {},
    methods: {},
}
</script>

<style scoped lang="less">
</style>
