<template>
	<div class="child">
		<h2>我是子组件1</h2>
		<h4>my: {{ phone }}</h4>
		<h4>bro: {{ bro }}</h4>
	</div>
</template>

<script setup lang="ts" name="child">
import { ref } from "vue";
import emitter from "@/utils/emitter";

const phone = ref("xiaomi");

const bro = ref("");

emitter.on("send-bro", (value: string) => {
	bro.value = value;
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
