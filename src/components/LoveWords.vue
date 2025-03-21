<template>
	<div class="words">
		<button @click="getWord">get</button>
		<ul>
			<li v-for="word in wordList" :key="word.id">
				{{ word.content }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="Count">
import useLoveWordsStore from "@/store/loveWords";
import type { LoveWord } from "@/types/loveWord";
import { storeToRefs } from "pinia";

const loveWordsStore = useLoveWordsStore();
const { wordList } = storeToRefs(loveWordsStore);

loveWordsStore.$subscribe((mutate, state) => {
	console.log("love word changed");
	localStorage.setItem("wordList", JSON.stringify(state.wordList));
});

function getWord() {
	// let result = await axios.get(
	// 	"https://www.random.org/strings/?num=1&len=10&digits=on&upperalpha=on&loweralpha=on&format=plain&rnd=new"
	// );
	// let obj: LoveWord = { id: nanoid(), content: result.data };
	// loveWordsStore.wordList.unshift(obj);

	loveWordsStore.getLoveWord();
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
