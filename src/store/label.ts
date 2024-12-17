import { defineStore } from "pinia";
import { ref } from "vue";

export const useLabelStore = defineStore("label", () => {
  interface Label {
    name: string;
    color: string;
    id: string | number;
  }
  /* 标签列表 */
  const labelList = ref<Label[]>([]);

  /* 添加标签 */
  const addLabel = (label: Label) => {
    labelList.value.push(label);
  };

  /* 设置标签颜色 */
  const setLabelColor = (name: string, color: string) => {
    const index = labelList.value.findIndex((item) => item.name === name);
    labelList.value[index].color = color;
  };

  /* 删除标签 */
  const deleteLabel = (id: string | number) => {
    const index = labelList.value.findIndex((item) => item.id === id);
    labelList.value.splice(index, 1);
  };

  return {
    labelList,
    addLabel,
    deleteLabel,
    setLabelColor,
  };
});
