import { defineStore } from "pinia";
import { ref } from "vue";

export const useToolsStore = defineStore("tools", () => {
  /* 工具列表 */
  const shapeList = [
    {
      name: "矩形",
      tag: "rect",
      icon: "/src/assets/icon/rect.svg",
    },
    {
      name: "圆形",
      tag: "circle",
      icon: "/src/assets/icon/circle.svg",
    },
    {
      name: "选择工具",
      tag: "edit",
      icon: "/src/assets/icon/select.svg",
    },
  ];

  /* 当前图形 */
  const shape = ref("");

  /* 切换图形 */
  const setShape = (tag: string) => {
    console.log("🏸 ~ tag:", tag);
    shape.value = tag;
  };

  return {
    shapeList,
    shape,
    setShape,
  };
});
