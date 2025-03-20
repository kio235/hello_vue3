<template>
	<div class="count">
		<h2>当前求和为：{{ countStore.sum }}</h2>
		<select v-model.number="selectNumber">
			<option :value="1">1</option>
			<option :value="2">2</option>
			<option :value="3">3</option>
		</select>
		<button @click="plus">plus</button>
		<button @click="minus">minus</button>
	</div>
</template>

<script setup lang="ts" name="Count">
import { ref } from "vue";
import useCountStore from "@/store/count";

const countStore=useCountStore();
let selectNumber = ref(3);

function plus(): void {
	countStore.sum += selectNumber.value;
}

function minus(): void {
	countStore.sum -= selectNumber.value;
}
</script>

<style scoped>
.count {
	background-color: skyblue;
	padding: 10px;
	border-radius: 10px;
}

select,
button {
	height: auto;
	margin: 3px;
}
</style>
