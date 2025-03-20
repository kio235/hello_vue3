<template>
	<div class="words">
		<button @click="getWord">get</button>
		<ul>
			<li v-for="word in loveWordsStore.wordList" :key="word.id">
				{{ word.content }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="Count">
import { reactive } from "vue";
import axios from "axios";
import { nanoid } from "nanoid";
import useLoveWordsStore from "@/store/loveWords";
import type { LoveWord } from "@/types/loveWord";

const loveWordsStore = useLoveWordsStore();

async function getWord() {
	let result = await axios.get(
		"https://api.uomg.com/api/rand.qinghua?format=json"
	);
	let obj: LoveWord = { id: nanoid(), content: result.data.content };
	loveWordsStore.wordList.unshift(obj);
}
</script>

<style scoped>
.words {
	background-color: green;
	margin-top: 10px;
	padding: 10px;
	border-radius: 10px;
}
</style>
