import { createMemoryHistory, createRouter } from "vue-router";

import Signin from "./components/Signin/index.vue";
import Signup from "./components/Signup/index.vue";

const routes = [
  { path: "/", component: Signin },
  { path: "/signup", component: Signup },
];

export default createRouter({
  history: createMemoryHistory(),
  routes,
});
