<template>
	<div class="father">
		<h2>我是父组件</h2>
		a: {{ a }} b: {{ b }} c: {{ c }} d: {{ d }}
		<Son :a="a" :b="b" :c="c" :d="d" />
	</div>
</template>

<script setup lang="ts" name="father">
import { ref } from "vue";
import Son from "./Son.vue";

let a = ref<number>(1);
let b = ref<number>(2);
let c = ref<number>(3);
let d = ref<number>(4);
</script>

<style scoped>
.father {
	background-color: lightgreen;
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
}
</style>
