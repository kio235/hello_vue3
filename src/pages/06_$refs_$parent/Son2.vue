<template>
	<div class="child">
		<h2>我是子组件2</h2>
		<h4>age: {{ age }}</h4>
	</div>
</template>

<script setup lang="ts" name="child">
import { ref } from 'vue';

const age = ref<number>(8)

defineExpose({age});
</script>

<style scoped>
.child {
	background-color: lightcyan;
	margin: 10px;
	padding: 5px;
	border-radius: 10px;
}
</style>
