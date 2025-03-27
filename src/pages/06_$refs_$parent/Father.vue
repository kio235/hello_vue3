<template>
	<div class="father">
		<h2>我是父组件</h2>
		<h4>age: {{ age }}</h4>
		<Son1 ref="son1" />
		<button @click="changeSon1Toy">change son1 toy</button>
		<son2 ref="son2" />
		<button @click="increaseAge($refs)">increase age</button>
	</div>
</template>

<script setup lang="ts" name="father">
import { isProxy, isReactive, reactive, ref, toRefs, useTemplateRef } from "vue";
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";

const age = ref<number>(34);

const son1 = useTemplateRef("son1");
const son2 = useTemplateRef("son2");

let a;
let b = reactive({ a1: 2, a2: 3 });

function changeSon1Toy() {
	son1.value!.toy = "XBox";
}

function increaseAge(x: { [key: string]: any }) {
	console.log(x);
	console.log(isProxy(x));
	console.log(toRefs(x));
	a = x;
	for (let key in x) {
		x[key].age += 1;
	}
}

defineExpose({ age });
</script>

<style scoped>
.father {
	background-color: lightgreen;
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
}
</style>
