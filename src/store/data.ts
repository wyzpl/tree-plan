import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  /* 数据列表 */
  const data = ref([]);

  /* 当前选中的 */
  const currentUrl = ref("");

  const setCurrentUrl = (url: string) => {
    currentUrl.value = url;
  };

  /* 添加数据 */
  const setData = (list: any) => {
    data.value.push(...list);
    currentUrl.value = list[0].url;
  };

  return {
    data,
    setData,
    currentUrl,
    setCurrentUrl,
  };
});
