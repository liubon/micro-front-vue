<template>
  <div>
    micro-app-list
    <ul v-for="item in microApps" :key="item.id">
      <li @click="chooseMicroApp(item.name)">{{ item.name }}</li>
    </ul>
    <div id="Micro-App-Container"></div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useQianKun from "@/hooks/useQianKun";
export default defineComponent({
  name: "Active",
  setup() {
    const microApps = ref([
      { id: "app-01", name: "micro-app-a" },
      { id: "app-02", name: "micro-app-b" },
    ]);
    useQianKun();
    const router = useRouter();
    const chooseMicroApp = (microApp) => {
      console.log(microApp);
      router.push({ name: "active", params: { id: microApp } });
    };
    return {
      microApps,
      chooseMicroApp,
    };
  },
});
</script>

<style>
</style>