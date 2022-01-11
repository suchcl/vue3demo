<template>
  <div class="child">
    <h3>子组件</h3>
    <Son />
  </div>
</template>
<script>
import Son from "./Son.vue";
export default {
  components: {
    Son,
  },
  beforeCreate() {
    console.log("子组件beforeCreate");
  },
  created() {
    console.log("子组件created");
  },
  beforeMount() {
    console.log("子组件beforeMount");
  },
  mounted() {
    console.log("子组件mounted");
  },
  beforeUpdate() {
    console.log("子组件beforeUpdate");
  },
  updated() {
    console.log("子组件updated");
  },
  beforeUnmount() {
    console.log("子组件beforeUnmount");
  },
  unmounted() {
    console.log("子组件unmounted");
  },
};
</script>
<style scoped>
.child {
  color: #fff;
  padding: 20px;
  background-color: brown;
}
</style>
