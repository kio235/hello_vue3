<template>
	<div class="child">
		<h2>我是子组件</h2>
		<Grandson />
	</div>
</template>

<script setup lang="ts" name="child">
import Grandson from "./Grandson.vue";
</script>

<style scoped>
.child {
	background-color: lightcyan;
	margin: 10px;
	padding: 5px;
	border-radius: 10px;
}
</style>
