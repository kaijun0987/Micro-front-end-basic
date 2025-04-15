import { createApp } from "vue";

import "./index.css";

import Counter from "./Counter.vue";

export default function (elem: string | Element) {
  createApp(Counter).mount(elem);
}
