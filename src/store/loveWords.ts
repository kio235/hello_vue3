import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
import type { LoveWordsState, LoveWord } from "@/types/loveWord";
import { reactive } from "vue";

// const useLoveWordsStore = defineStore("loveWords", {
// 	state(): LoveWordsState {
// 		return {
// 			wordList: JSON.parse(localStorage.getItem("wordList") || "[]"),
// 		};
// 	},
// 	actions: {
// 		async getLoveWord() {
// 			let result = await axios.get(
// 				"https://www.random.org/strings/?num=1&len=10&digits=on&upperalpha=on&loweralpha=on&format=plain&rnd=new"
// 			);
// 			let obj: LoveWord = { id: nanoid(), content: result.data };
// 			this.wordList.unshift(obj);
// 		},
// 	},
// });

const useLoveWordsStore = defineStore("loveWords", () => {
	const wordList = reactive(
		JSON.parse(localStorage.getItem("wordList") || "[]")
	);
	async function getLoveWord() {
		let result = await axios.get(
			"https://www.random.org/strings/?num=1&len=10&digits=on&upperalpha=on&loweralpha=on&format=plain&rnd=new"
		);
		let obj: LoveWord = { id: nanoid(), content: result.data };
		wordList.unshift(obj);
	}
	return { wordList, getLoveWord };
});

export default useLoveWordsStore;
