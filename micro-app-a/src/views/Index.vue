<template>
  <div>
    <div>This is index page.</div>
    <ul>
      <li @click="linkTo('One')">Step One</li>
      <li @click="linkTo('Two')">Step Two</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const linkTo = (step) => {
      router.push({ name: "step" + step });
    };
    return { linkTo };
  },
});
</script>

<style>
</style>