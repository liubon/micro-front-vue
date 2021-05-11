import { registerMicroApps } from "qiankun";
const getActiveRule = (hash) => (location) => {
  return location.hash.startsWith(hash);
};
registerMicroApps([
  {
    name: "micro-app-a", // app name registered
    entry: "//localhost:7101",
    container: "#Micro-App-Container",
    props: { routerBase: "/active/micro-app-a" },
    activeRule: getActiveRule("#/active/micro-app-a"),
  },
  {
    name: "micro-app-b", // app name registered
    entry: "//localhost:7102",
    container: "#Micro-App-Container",
    props: { routerBase: "/active/micro-app-b" },
    activeRule: getActiveRule("#/active/micro-app-b"),
  },
]);
// 首屏加载微应用时，容器为初始化
setTimeout(() => {
  // start();
},0);

