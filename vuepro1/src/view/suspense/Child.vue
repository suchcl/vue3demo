<template>
  <div class="child">
    <h3>子组件</h3>
    <p>求和：{{sum}}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    async setup(){
        let sum = ref(0);
        let promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve({sum});
            },1000);
        });
        return await promise;
    }
}
</script>

<style scoped>
.child {
  padding: 20px;
  color: #fff;
  background-color: teal;
}
</style>
