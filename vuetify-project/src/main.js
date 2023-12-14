/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import router from "@/router";
import axiosInterceptor from "@/api/interceptor"

import axios from "axios";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

registerPlugins(app);
app.use(pinia);
app.use(router);

app.mount("#app");


axiosInterceptor();

