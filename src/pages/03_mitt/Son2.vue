<template>
	<div class="child">
		<h2>我是子组件2</h2>
		<h4>I have: {{ pad }}</h4>
		<button @click="emitter.emit('send-bro',pad)">send bro</button>
		<button @click="pad+='Pro'">upgrade</button>
	</div>
</template>

<script setup lang="ts" name="child">
import { ref } from 'vue';
import emitter from '@/utils/emitter';

const pad = ref('Ipad')
</script>

<style scoped>
.child {
	background-color: lightcyan;
	margin: 10px;
	padding: 5px;
	border-radius: 10px;
}
</style>
