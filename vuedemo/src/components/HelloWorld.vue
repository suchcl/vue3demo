<template>
  <div class="hello">
    <p>msg</p>
    <p class="text">测试下样式</p>
    <ul>
      <li>苹果</li>
      <li>香蕉</li>
      <li>西红柿</li>
    </ul>
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
  color: #369;
}
</style>
