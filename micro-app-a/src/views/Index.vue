<template>
  <div>
    <div>This is index page.</div>
    <ul>
      <li><button @click="linkTo('One')">Step One</button></li>
      <li><button @click="linkTo('Two')">Step Two</button></li>
      <li>
        <router-link to="/active/micro-app-b">Go to micro-app-b</router-link>
      </li>
      <li>
        <button @click="linkToSetcionB">go to micro-app-b section-b</button>
      </li>
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
    const linkToSetcionB = () => {
      router.push("/active/micro-app-b/sectionB");
    };
    return { linkTo, linkToSetcionB };
  },
});
</script>

<style>
</style>