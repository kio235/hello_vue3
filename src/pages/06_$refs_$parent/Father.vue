<template>
	<div class="father">
		<h2>我是父组件</h2>
		<Son1 />
		<son2 />
	</div>
</template>

<script setup lang="ts" name="father">
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";
</script>

<style scoped>
.father {
	background-color: lightgreen;
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
}
</style>
