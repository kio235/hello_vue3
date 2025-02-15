// 创建一个路由器并暴露

import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Dogs from "@/views/Dogs.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/home",
			component: Home,
		},
		{
			path: "/about",
			component: About,
		},
		{
			path: "/news",
			component: News,
		},
        {
            path: "/dogs",
			component: Dogs,
        }
	],
});

export default router;