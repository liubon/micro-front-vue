import { onMounted } from "vue";
import { start } from "qiankun";

export default function useQianKun() {
  onMounted(() => {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  });
}
