<template>
	<div class="count">
		<h2>当前求和为：{{ sum }}</h2>
		<h3>共修改: {{ countStore.changeCount }}次</h3>
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
import { ref, toRef, toRefs } from "vue";
import useCountStore from "@/store/count";
import { storeToRefs } from "pinia";

const countStore = useCountStore();
console.log(countStore);
let selectNumber = ref(3);

let { sum } = storeToRefs(countStore);
// let sum = toRef(countStore,'sum');

function plus(): void {
	// 直接修改
	// countStore.sum += selectNumber.value;
	// countStore.changeCount += 1;

	// 批量覆盖
	countStore.$patch({
		sum: countStore.sum + selectNumber.value,
		changeCount: countStore.changeCount + 1,
	});
}

function minus(): void {
	// countStore.sum -= 1;
	// action修改
	countStore.minus(selectNumber.value);
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
