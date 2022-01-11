<template>
  <div class="son">
    <h3>后代组件</h3>
    <Dialog />
  </div>
</template>
<script>
import Dialog from "./Dialog.vue";
export default {
  components: {
    Dialog,
  },
  beforeCreate() {
    console.log("孙组件beforeCreate");
  },
  created() {
    console.log("孙组件created");
  },
  beforeMount() {
    console.log("孙组件beforeMount");
  },
  mounted() {
    console.log("孙组件mounted");
  },
  beforeUpdate() {
    console.log("孙组件beforeUpdate");
  },
  updated() {
    console.log("孙组件updated");
  },
  beforeUnmount() {
    console.log("孙组件beforeUnmount");
  },
  unmounted() {
    console.log("孙组件unmounted");
  },
};
</script>
<style scoped>
.son {
  padding: 20px;
  background-color: teal;
}
</style>
