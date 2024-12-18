import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import store from "./store";
import "virtual:svg-icons-register";

createApp(App).use(ElementPlus).use(store).mount("#app");
