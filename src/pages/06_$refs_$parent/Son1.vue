<template>
	<div class="child">
		<h2>我是子组件1</h2>
		<h4>My toy: {{ toy }}</h4>
		<h4>age: {{ age }}</h4>
		<button @click="increaseAge($parent)">increase father age</button>
	</div>
</template>

<script setup lang="ts" name="child">
import { ref } from "vue";

const toy = ref("PS5");
const age = ref<number>(6);

function increaseAge(parent: any) {
	console.log(parent);
	parent.age += 1;
}

defineExpose({ toy, age });
</script>

<style scoped>
.child {
	background-color: lightcyan;
	margin: 10px;
	padding: 5px;
	border-radius: 10px;
}
</style>
