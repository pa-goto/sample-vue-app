import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { globalStore, GlobalStoreKey } from "./stores/Global";

const app = createApp(App);
app
  .use(router)
  .provide(GlobalStoreKey, globalStore())
  .mount("#app");
