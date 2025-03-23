<template>
	<div class="father">
		<h2>我是父组件</h2>
		<!-- v-model用在HTML标签上 -->
		<!-- <input type="text" v-model="userName" /> -->
		<!-- <input
			type="text"
			:value="userName"
			@input="userName = ($event.target as HTMLInputElement).value"
		/> -->

		<!-- v-model用在组件上 -->
		<!-- <MyInput
			:modelValue="userName"
			@update:modelValue="userName = $event.value"
		></MyInput> -->

		<MyInput v-model="userName" />

		<h4>user name: {{ userName }}</h4>
	</div>
</template>

<script setup lang="ts" name="father">
import { ElCountdown, ElInput } from "element-plus";
import { ref } from "vue";
import MyInput from "./MyInput.vue";

const userName = ref<string>("default user name");
</script>

<style scoped>
.father {
	background-color: lightgreen;
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
}
</style>
