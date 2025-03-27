<template>
	<div class="category">
		<slot name="title"><h2>{{ props.title }}</h2></slot>
		<slot name="content" message="fuck you"></slot>
		<br /><br />
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		default: "default title",
	},
});
</script>

<style scoped>
.category {
	background-color: rgba(144, 238, 144, 1); /* 半透明背景 */
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
	/* 毛玻璃核心效果 */
	backdrop-filter: blur(10px) saturate(150%); /* 背景模糊和饱和度增强 */
	-webkit-backdrop-filter: blur(10px) saturate(150%); /* Safari 兼容 */
	/* 玻璃质感细节 */
	border: 1px solid rgba(255, 255, 255, 0.2); /* 半透明白边 */
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
		inset 0 0 16px rgba(255, 255, 255, 0.1); /* 内发光 */

	width: 400px;
	height: 300px;
}

h2 {
	background-color: rgb(255, 204, 95);
	border-radius: 5px;
	text-align: center;
}
</style>
