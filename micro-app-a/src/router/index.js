import { createRouter, createWebHashHistory } from "vue-router";

const Index = () => import("@/views/Index.vue");
const StepOne = () => import("@/views/StepOne.vue");
const StepTwo = () => import("@/views/StepTwo.vue");

let router = null;

const getRoutes = (routerBase) => [
  {
    name: "Index",
    path: routerBase,
    component: Index,
    children: [
      {
        name: "stepOne",
        path: "stepOne",
        component: StepOne,
      },
      {
        name: "stepTwo",
        path: "stepTwo",
        component: StepTwo,
      },
    ],
  }
];

export function getRouter(routerBase) {
  router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: getRoutes(routerBase), // `routes: routes` 的缩写
  });
  return router;
}

export default router;
