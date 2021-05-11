<template>
  <div>
    <h2>About</h2>
    <div id="yourContainer"></div>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";
import { defineComponent } from "vue";
import useQianKun from "@/hooks/useQianKun";
export default defineComponent({
  name: "About",
  setup() {
    useQianKun()
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