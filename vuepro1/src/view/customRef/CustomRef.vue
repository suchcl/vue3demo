<template>
  <div class="custom-ref">
    <input type="text" v-model="keywords" />
    <h3>{{ keywords }}</h3>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let keywords = ref("Hello world!"); // 使用vue提供的响应式

    // 实现自定义的响应式  需要借助customRef API
    // function myRef(value){
    //     return customRef(() => {
    //         return {
    //             get(){},
    //             set(){}
    //         }
    //     });
    // }
    return {
      keywords,
    };
  },
};
</script>

<style scoped>
.custom-ref {
  margin-top: 20px;
  padding: 20px;
  background-color: tomato;
}
</style>
