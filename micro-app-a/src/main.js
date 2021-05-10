import { createApp } from "vue";
import App from "./App.vue";
import { getRouter } from "./router/index";

// vue实例卸载后不能重新挂载
let app = null;

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("micro-app-a bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  // 每次挂载都需要生成新的实例
  if (!app) {
    app = createApp(App);
    const router = getRouter(props.routerBase);
    app.use(router);
  }
  console.log("mount:micro-app-a");
  console.log(props);
  app.mount("#micro-app-a");
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log("umount", props);
  app.unmount("#micro-app-a");
  app = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("update:micro-app-a");
  console.log("props:", props);
}
