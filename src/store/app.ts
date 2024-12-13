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

  /* 删除标注 */
  const removeAnnotation = (id: string) => {
    /* 移除当前标注 */
    app.value.tree.findId(id).remove();
    /* 清空画布选择目标 */
    app.value.editor.target = null;
    /* 从标注列表移除 */
    const index = annotationList.value.findIndex((item: any) => item.id === id);
    annotationList.value.splice(index, 1);
  };

  return {
    app,
    setApp,
    annotationList,
    updateAnnotationList,
    removeAnnotation,
    setHoverAnnotationId,
  };
});
