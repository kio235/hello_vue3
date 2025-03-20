import { defineStore } from "pinia";
import type { LoveWordsState } from "@/types/loveWord";

const useLoveWordsStore = defineStore("loveWords", {
	state():LoveWordsState {
		return {
			wordList: [],
		};
	},
});

export default useLoveWordsStore;
