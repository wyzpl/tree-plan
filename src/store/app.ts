import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  /* 画布实例 */
  const app = ref();

  const setApp = (value: any) => {
    app.value = value;
  };

  /* 标注列表 */
  const annotationList = ref<any[]>([]);

  /* 更新标注列表 */
  const updateAnnotationList = (shape: any) => {
    annotationList.value.push(shape);
  };

  /* 鼠标移入显示对应标注 */
  const setHoverAnnotationId = (id: string) => {
    app.value.editor.target = app.value.tree.findId(id);
  };

  /* 删除(清空)标注 */
  const removeAnnotation = (id: string) => {
    if (id === "clear") {
      annotationList.value.forEach((item: any) => {
        app.value.tree.findId(item.id).remove();
      });
      annotationList.value = [];
    } else {
      /* 移除当前标注 */
      app.value.tree.findId(id).remove();
      /* 从标注列表移除 */
      const index = annotationList.value.findIndex((item: any) => item.id === id);
      annotationList.value.splice(index, 1);
    }

    /* 清空画布选择目标 */
    app.value.editor.target = null;
  };

  /* 适应屏幕 */
  const fitScreen = (type: string) => {
    switch (type) {
      case "fit":
        app.value.tree.zoom("fit", 10);
        break;
      case "in":
        app.value.tree.zoom("in");
        break;
      case "out":
        app.value.tree.zoom("out");
        break;
    }
  };

  /* 允许编辑 */
  const allowEdit = (type: string) => {
    console.log("🏸 ~ type:", type);
    app.value.editor.visible = true;
    app.value.tree.hitChildren = true;
  };

  return {
    app,
    setApp,
    annotationList,
    updateAnnotationList,
    removeAnnotation,
    setHoverAnnotationId,
    fitScreen,
    allowEdit,
  };
});
