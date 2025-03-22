<template>
	<div class="father">
		<h2>我是父组件</h2>
		<h4>Son's toy: {{ sonToy }}</h4>
		<son @send-toy="(toy) => (sonToy = toy)" />
	</div>
</template>

<script setup lang="ts" name="father">
import { ref } from "vue";
import Son from "./Son.vue";
const sonToy = ref("");
</script>

<style scoped>
.father {
	background-color: lightgreen;
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
}
</style>
