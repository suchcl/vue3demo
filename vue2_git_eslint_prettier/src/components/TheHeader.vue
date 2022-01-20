<template>
  <ul class="nav">
    <li>
      <router-link to="/user">用户列表</router-link>
    </li>
    <li>
      <router-link to="/profile">个人资料</router-link>
    </li>
    <li>
      <router-link to="/ui">UI组件</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
};
</script>