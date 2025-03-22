<template>
	<div class="app">
		<div class="navigate">
			<RouterLink :to="{ name: 'props' }"> Props </RouterLink>
			<RouterLink :to="{ name: 'custom-event' }"> 自定义事件 </RouterLink>
			<RouterLink :to="{ name: 'mitt' }"> mitt </RouterLink>
			<RouterLink :to="{ name: 'v-model' }"> v-model </RouterLink>
			<RouterLink :to="{ name: 'attrs' }"> $attrs </RouterLink>
			<RouterLink :to="{ name: 'refs' }"> $refs | $parent </RouterLink>
			<RouterLink :to="{ name: 'provide' }">
				provide | inject
			</RouterLink>
			<RouterLink :to="{ name: 'pinia' }"> pinia </RouterLink>
			<RouterLink :to="{ name: 'slot' }"> slot </RouterLink>
		</div>
		<div class="content">
			<RouterView></RouterView>
		</div>
	</div>
</template>

<script setup lang="ts" name="App"></script>

<style scoped>
.app {
	min-height: 90vh;
	background-color: #f5f5f5;
}

.navigate {
	position: fixed;
	left: 0;
	top: 0;
	width: 200px;
	height: 100vh; /* 全屏高度 */
	background-color: #fff;
	box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
	padding: 20px 0;
	display: flex;
	flex-direction: column;
	gap: 8px;
	z-index: 1000;
}

.navigate a {
	padding: 12px 24px;
	color: #333;
	text-decoration: none;
	transition: all 0.3s;
}

.navigate a:hover {
	background-color: #f0f0f0;
}

.navigate a.router-link-exact-active {
	background-color: #e8f0fe;
	color: #1967d2;
	font-weight: 500;
}

.content {
	margin-left: 200px; /* 等于导航栏宽度 */
	height: 100vh;
	padding: 24px;
	box-sizing: border-box;
}
/* 响应式调整 */
@media (max-width: 768px) {
	.navigate {
		width: 160px;
	}
	.content {
		padding: 16px;
	}
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
