<template>
	<div class="news-box">
		<div class="navigate">
			<li v-for="i in news" :key="i.id">
				<!-- <RouterLink :to="`/news/detail/123/456/789`" active-class="active">{{
					i.title
				}}</RouterLink> -->

				<RouterLink
					:to="{
						name:'newsContent',
                        params:{
                            id:i.id,
                            title:i.title,
                            content:i.content
                        }
					}" 
					>{{ i.title }}</RouterLink
				>
			</li>
		</div>
		<div class="news-content">
			<RouterView></RouterView>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const news = [
	{ title: "new1", id: "001", content: "I woke up!" },
	{ title: "new2", id: "002", content: "I ate!" },
	{ title: "new3", id: "003", content: "I sleep!" },
];
</script>

<style scoped>
/* 核心布局代码 */
.news-box {
	display: flex; /* 启用 Flexbox */
	gap: 20px; /* 可选：设置导航与内容的间距 */
	min-height: 82vh; /* 确保容器高度占满屏幕 */
}

/* 左侧导航区 */
.navigate {
	width: 200px; /* 固定导航宽度 */
	padding: 20px; /* 可选：内边距 */
	list-style: none; /* 移除 li 的默认样式 */
	background-color: #e9e5e5;
	border-radius: 5px;
}

/* 右侧内容区 */
.news-content {
	flex: 1; /* 自动填充剩余空间 */
	padding: 20px; /* 可选：内边距 */
}

/* 可选：导航链接样式 */
.navigate a {
	display: block;
	padding: 10px;
	text-decoration: none;
	color: #333;
}

.navigate a.active {
	font-weight: bold;
}
</style>
