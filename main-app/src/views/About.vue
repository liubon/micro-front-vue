<template>
  <div>
    <h2>About</h2>
    <div id="yourContainer"></div>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
  setup() {
    loadMicroApp({
      name: "micro-app-c",
      entry: "//localhost:7103",
      container: "#yourContainer",
    });
  },
});
</script>

<style>
</style>