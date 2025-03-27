<template>
	<div class="grandchild">
		<h2>我是孙组件</h2>
		<button @click="addMoney(-2)">-2</button>
	</div>
</template>

<script setup lang="ts" name="child">
import { inject } from "vue";

let { money, addMoney } = inject("money", {
	money: 0,
	addMoney: (n: number) => {},
});
console.log(money);
</script>

<style scoped>
.grandchild {
	background-color: lightpink;
	margin: 10px;
	padding: 5px;
	border-radius: 10px;
}
</style>
