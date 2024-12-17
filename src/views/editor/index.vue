<template>
    <div class="editor-view">
        <ToolsView />
        <div id="container" ref="rectRef"></div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { App, DragEvent, ImageEvent, PointerEvent, Frame, ChildEvent, RenderEvent, Rect, Ellipse, } from 'leafer-ui'
import { DotMatrix } from 'leafer-x-dot-matrix'
import '@leafer-in/editor'
import '@leafer-in/view'
import { nanoid } from 'nanoid'


import ToolsView from './tools/index.vue'
import Footer from './tools/footer.vue'

const appStore = useAppStore()
const toolsStore = useToolsStore()

/* 图片大小，填充 Frame */
const w = ref(0)
const h = ref(0)

/* 绘制 */
const isDraw = ref(false)
/* 编辑 */
const isEdit = ref(false)

/* 加载图片并返回图片宽高 */
const loadImage = (url: string): Promise<{ width: number, height: number }> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve({ width: image.width, height: image.height });
        };
        image.onerror = reject;
        image.src = url;
    });
}



onMounted(async () => {

    let res = await loadImage('https://img2.baidu.com/it/u=2101541482,3418856015&fm=253&fmt=auto&app=138&f=JPEG?w=1269&h=800')

    w.value = res.width
    h.value = res.height

    const app = new App({
        view: 'container',
        editor: { type: 'draw' },
        wheel: { zoomSpeed: 0.2 },
        zoom: {
            min: 0.2, max: 2
        },
        move: {
            scroll: 'limit',
            holdRightKey: true
        },
    })


    appStore.setApp(app)
    // 创建点阵实例
    const dotMatrix = new DotMatrix(app)

    let frame = new Frame({
        width: w.value,
        height: h.value,
        fill: {
            type: 'image',
            url: 'https://img2.baidu.com/it/u=2101541482,3418856015&fm=253&fmt=auto&app=138&f=JPEG?w=1269&h=800',
        },
        overflow: 'hide',
    })

    app.tree.add(frame)
    app.tree.zoom('fit', 10)
    // 启用点阵显示
    dotMatrix.enableDotMatrix(true)


    app.on(PointerEvent.DOWN, (e) => {
        /* 鼠标点击图片外进制绘制 */
        const { x, y } = e.getPagePoint()
        if (x < 0 || y < 0 || x > w.value || y > h.value) return
        /* 开启绘制 */
        isDraw.value = true
    })

    // 创建图形（拖拽）
    let shape: Rect | Ellipse | undefined

    app.on(DragEvent.START, () => {
        if (!toolsStore.shape || !isDraw.value) return

        app.editor.visible = false
        app.tree.hitChildren = false

        if (toolsStore.shape === 'rect') {
            shape = new Rect({ id: nanoid(), name: '选择标签', dragBounds: 'parent', editable: true, fill: 'rgb(50,205,121,.2)', stroke: 'rgb(50,205,121,.4)' })
        } else if (toolsStore.shape === 'circle') {
            shape = new Ellipse({ id: nanoid(), name: '选择标签', dragBounds: 'parent', editable: true, fill: 'rgb(50,205,121,.2)', stroke: 'rgb(50,205,121,.4)' })
        } else {
            shape = undefined
            app.editor.visible = true
            app.tree.hitChildren = true
        }

    })

    app.on(DragEvent.DRAG, (e: DragEvent) => {
        if (!isDraw.value || shape == undefined) return

        /* 设置大小 添加图形 */
        shape.set(e.getPageBounds())
        frame.add(shape)
    })

    app.on(PointerEvent.UP, (e) => {

        if (!toolsStore.shape || !isDraw.value) return

        /* 添加标注 */
        if (shape && shape != undefined) appStore.updateAnnotationList(shape)
        shape = undefined
        isDraw.value = false
    })
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
    height: calc(100% - 150px);
}
</style>