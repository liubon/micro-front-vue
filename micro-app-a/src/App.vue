<template>
  <div class="micro-app-a">
    <HelloWorld msg="Welcome to micro-app-a" />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const route = useRoute();
    console.log("route", route.path);
  },
});
</script>

<style>
.micro-app-a {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
