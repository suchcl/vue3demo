<template>
  <div class="parent">
    <h3>父组件</h3>
    <Child />
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  components: {
    Child,
  },
  beforeCreate(){
	console.log("父组件beforeCreate");
  },
  created(){
	console.log("父组件created");
  },
  beforeMount() {
    console.log("父组件beforeMount");
  },
  mounted() {
    console.log("父组件mounted");
  },
  beforeUpdate() {
    console.log("父组件beforeUpdate");
  },
  updated() {
    console.log("父组件updated");
  },
  beforeUnmount() {
    console.log("父组件beforeUnmount");
  },
  unmounted() {
    console.log("父组件unmounted");
  },
};
</script>

<style scoped>
.parent {
  padding: 20px;
  background-color: aquamarine;
}
</style>
