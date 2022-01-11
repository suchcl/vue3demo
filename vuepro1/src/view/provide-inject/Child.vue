<template>
    <div class="child">
        <h3>子组件</h3>
        <Son />
    </div>
</template>

<script>
    import Son from "./Son.vue";
    export default {
        components:{
            Son
        }
    }
</script>

<style scoped>
.child {
    color: #fff;
    padding: 20px;
    background-color: brown;
}
</style>