import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import VueDragscroll from "vue-dragscroll";

import "@/assets/style.css";

library.add(fas);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);
app.use(VueDragscroll);
app.use(router);
app.mount("#app");
