// 创建一个路由器并暴露

import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Dogs from "@/views/Dogs.vue";
import NewsContent from "@/views/NewsContent.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: "home",
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
			children:[
				{
					name:"newsContent",
					path:"detail/:id/:title/:content?",
					component:NewsContent
				}
			]
		},
		{
			path: "/dogs",
			component: Dogs,
		},
	],
});

export default router;
