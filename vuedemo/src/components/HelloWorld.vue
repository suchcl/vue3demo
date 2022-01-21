<template>
  <div class="hello">
    <p>msg</p>
    <p class="text">测试下样式</p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.text {
  color: #f20;
}
</style>
