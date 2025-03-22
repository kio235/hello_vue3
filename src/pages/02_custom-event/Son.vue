<template>
	<div class="child">
		<h2>我是子组件</h2>
		<h4>My toy:{{ toy }}</h4>
		<button @click="upgradeToy">upgrade toy</button>
		<button @click="sendToy">send toy</button>
	</div>
</template>

<script setup lang="ts" name="child">
import { ref } from 'vue';

const emit = defineEmits(['send-toy'])

const toy=ref('XBox')

function sendToy(){
	emit('send-toy',toy.value);
}

function upgradeToy(){
	toy.value+='X'
}
</script>

<style scoped>
.child {
	background-color: lightcyan;
	margin: 10px;
	padding: 5px;
	border-radius: 10px;
}
</style>
