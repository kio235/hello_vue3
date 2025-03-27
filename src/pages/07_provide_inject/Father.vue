<template>
	<div class="father">
		<h2>我是父组件</h2>
		<h4>money: {{ money }}</h4>
		<h4>car: {{ car }}</h4>
		<Son />
	</div>
</template>

<script setup lang="ts" name="father">
import { provide, reactive, ref } from "vue";
import Son from "./Son.vue";

const car = reactive({
	brand: "Benz",
	module: "Maybach",
	price: 2000000,
});
const money = ref<number>(1000000);
function addMoney(n: number) {
	money.value += n;
}

provide("money", { money, addMoney });
provide("car", car);
</script>

<style scoped>
.father {
	background-color: rgba(144, 238, 144, 0.3); /* 半透明背景 */
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
	/* 毛玻璃核心效果 */
	backdrop-filter: blur(10px) saturate(150%); /* 背景模糊和饱和度增强 */
	-webkit-backdrop-filter: blur(10px) saturate(150%); /* Safari 兼容 */
	/* 玻璃质感细节 */
	border: 1px solid rgba(255, 255, 255, 0.2); /* 半透明白边 */
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
		/* 外阴影 */ inset 0 0 16px rgba(255, 255, 255, 0.1); /* 内发光 */
}
</style>
