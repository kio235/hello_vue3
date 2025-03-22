<template>
	<div class="father">
		<h2>我是父组件</h2>
		<son />
	</div>
</template>

<script setup lang="ts" name="father">
import Son from "./Son.vue";
</script>

<style scoped>
.father {
	background-color: lightgreen;
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
}
</style>
