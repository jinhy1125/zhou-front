import { createApp } from "vue";
import App from "./App.vue";
// import axios from "./plugins/axios";

// import "~/styles/element/index.scss";

import ElementPlus from "element-plus";
// import all element css, uncommented next line
import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

// axios
import axios from 'axios'
axios.defaults.baseURL='http://172.16.207.120:8080'

const app = createApp(App);
app.use(ElementPlus);
app.config.globalProperties.$axios = axios;

app.mount("#app");
