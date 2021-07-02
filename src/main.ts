import { createApp } from "vue";
import App from "./App.vue";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $style: {
      [key: string]: string;
    }
  }
}

createApp(App).mount("#app");
