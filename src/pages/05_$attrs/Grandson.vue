<template>
	<div class="grandchild">
		<h2>我是孙组件</h2>
		a: {{ a }} b: {{ b }} c: {{ c }} d: {{ d }}
	</div>
</template>

<script setup lang="ts" name="child">
import { ref } from "vue";

defineProps(["a", "b", "c", "d"]);
</script>

<style scoped>
.grandchild {
	background-color: lightpink;
	margin: 10px;
	padding: 5px;
	border-radius: 10px;
}
</style>
