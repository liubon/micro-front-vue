<template>
  <div class="micro-app-b">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to micro-app-b." />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
.micro-app-b {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
