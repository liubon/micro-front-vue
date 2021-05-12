const routerBaseKey = Symbol("routerBase");
import { inject } from "vue";
export function useInitRouterBase(app, base) {
  return app.provide(routerBaseKey, base);
}
export function useGetRouterBase() {
  return inject(routerBaseKey);
}
