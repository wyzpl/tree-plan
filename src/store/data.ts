import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  /* 数据列表 */
  const data = ref([]);

  /* 当前选中的 */
  const current = ref();

  const setCurrent = (item: any) => {
    current.value = item;
  };

  /* 添加数据 */
  const setData = (list: any) => {
    data.value.push(...list);
    current.value = list[0];
  };

  return {
    data,
    setData,
    current,
    setCurrent,
  };
});
