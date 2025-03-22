<template>
	<div class="child">
		<h2>我是子组件</h2>
		<h4>My Toy: {{ toy }}</h4>
		<h4>Father's car: {{ props.car }}</h4>
		<button @click="upgradeToy">upgrade toy</button>
	</div>
</template>

<script setup lang="ts" name="child">
import { onMounted, ref, watch } from "vue";

const props = defineProps({
	car: String,
	sendToy: {
		type: Function,
		required: true,
	},
});

const toy = ref("PS5");

function upgradeToy() {
	toy.value += "Pro";
}

onMounted(() => {
	props.sendToy(toy.value);
});
watch(toy, (newval) => {
	props.sendToy(newval);
});
</script>

<style scoped>
.child {
	background-color: lightcyan;
	margin: 10px;
	padding: 5px;
	border-radius: 10px;
}
</style>
