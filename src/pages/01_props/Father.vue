<template>
	<div class="father">
		<h2>我是父组件</h2>
		<h4>My car: {{ car }}</h4>
		<h4 v-show="toy">My Son's Toy: {{ toy }}</h4>
		<button @click="changeCar">change car</button>
		<son :car="car" :sendToy="getSonToy" />
	</div>
</template>

<script setup lang="ts" name="father">
import { reactive, ref } from "vue";
import Son from "./Son.vue";
const car = ref("Benz");
const toy = ref("");

function changeCar() {
	car.value += "S";
}

function getSonToy(sonToy: string) {
	toy.value = sonToy;
}
</script>

<style scoped>
.father {
	background-color: lightgreen;
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
}
</style>
