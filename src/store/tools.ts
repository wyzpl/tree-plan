import { defineStore } from "pinia";
import { ref } from "vue";
import { useAppStore } from "./app";

export const useToolsStore = defineStore("tools", () => {
  /* 工具列表 */
  const shapeOperation = [
    {
      name: "矩形",
      tag: "rect",
      icon: "rect",
    },
    {
      name: "圆形",
      tag: "circle",
      icon: "circle",
    },
    {
      name: "选择工具",
      tag: "edit",
      icon: "select",
    },
  ];
  /* 操作列表 */
  const drawOperation = [
    // {
    //   name: "撤销",
    //   tag: "revoked",
    //   icon: "/src/assets/icon/revoked.svg",
    // },
    // {
    //   name: "恢复",
    //   tag: "reset",
    //   icon: "/src/assets/icon/reset.svg",
    // },
    {
      name: "清空标注",
      tag: "clear",
      icon: "clear",
    },
  ];
  /* 视图操作 */
  const viewOperation = [
    {
      name: "放大",
      tag: "in",
      icon: "in",
    },
    {
      name: "缩小",
      tag: "out",
      icon: "out",
    },
    {
      name: "适配屏幕",
      tag: "fit",
      icon: "fitScreen",
    },
  ];

  /* 当前图形 */
  const shape = ref("");

  /* 切换图形 */
  const setShape = (tag: string) => {
    shape.value = tag;
    if (tag === "edit") {
      useAppStore().allowEdit();
    } else {
      useAppStore().stopEdit();
    }
  };

  return {
    shapeOperation,
    drawOperation,
    viewOperation,
    shape,
    setShape,
  };
});
