<template>
  <div>
    <h2>Index page</h2>
    <ul>
      <li>
        <router-link :to="pathBase+'/sectionA'">sectionA</router-link>
      </li>
      <li>
        <router-link :to="pathBase+'/sectionB'">sectionB</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useGetRouterBase } from "@/hooks/useBasePath";
export default defineComponent({
  name: "Index",
  setup() {
    const pathBase = ref("");
    pathBase.value = useGetRouterBase();
    return {
      pathBase,
    };
  },
});
</script>

<style>
</style>