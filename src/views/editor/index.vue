<template>
    <div class="editor-view">
        <ToolsView />
        <div id="container" ref="rectRef"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { App, DragEvent, ImageEvent, PointerEvent, ChildEvent, RenderEvent, Rect, Ellipse, Image } from 'leafer-ui'
import { DotMatrix } from 'leafer-x-dot-matrix'
import '@leafer-in/editor'
import '@leafer-in/view'
import { nanoid } from 'nanoid'

import ToolsView from './tools/index.vue'
import { useAppStore } from '@/store/app'
import { useToolsStore } from '@/store/tools'

const appStore = useAppStore()
const toolsStore = useToolsStore()

onMounted(() => {
    const app = new App({
        view: 'container',
        editor: { type: 'draw' },
        wheel: { zoomMode: 'mouse', zoomSpeed: 0.2 },
        zoom: {
            min: 0.2, max: 2
        }
    })

    appStore.setApp(app)
    // 创建点阵实例
    const dotMatrix = new DotMatrix(app)
    // 启用点阵显示
    dotMatrix.enableDotMatrix(true)

    const image = new Image({
        url: 'https://images.unsplash.com/photo-1653839245998-c0589e00e68d?ixid=M3w4ODczOHwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzg5NzM3MHw&ixlib=rb-4.0.3&w=1920&h=1080&dpr=1&auto=format&q=75&fit=crop',
        draggable: false
    })
    image.once(ImageEvent.LOADED, function (e: ImageEvent) {
        app.tree.zoom('fit', 10)
    })
    app.tree.add(image)



    // setTimeout(() => {

    // 2秒后进入创建图形模式
    // app.editor.visible = false
    // app.tree.hitChildren = false


    // 创建图形（拖拽）
    let shape: Rect | Ellipse | undefined

    app.on(DragEvent.START, () => {
        if (!toolsStore.shape) return

        app.editor.visible = false
        app.tree.hitChildren = false

        if (toolsStore.shape === 'rect') {
            shape = new Rect({ id: nanoid(), name: nanoid(), editable: true, fill: 'rgb(50,205,121,.2)', stroke: 'rgb(50,205,121,.4)' })
            app.tree.add(shape)
        } else if (toolsStore.shape === 'circle') {
            shape = new Ellipse({ id: nanoid(), name: nanoid(), editable: true, fill: 'rgb(50,205,121,.2)', stroke: 'rgb(50,205,121,.4)' })
            app.tree.add(shape)
        } else {
            shape = undefined
            app.editor.visible = true
            app.tree.hitChildren = true
        }

    })

    app.on(DragEvent.DRAG, (e: DragEvent) => {
        if (shape && shape != undefined) shape.set(e.getPageBounds())
    })

    app.on(PointerEvent.UP, (e) => {
        if (!toolsStore.shape) return

        /* 添加标注 */
        if (shape && shape != undefined) appStore.updateAnnotationList(shape)

        // const json = app.tree.toJSON()
        // appStore.updateAnnotationList(json.children)
    })
    // }, 2000)
})

</script>

<style scoped>
.editor-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
}

#container {
    width: 100%;
    height: 100%;
}
</style>