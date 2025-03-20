// src/types/loveWord.ts
export interface LoveWord {
	id: string;
	content: string;
}

export interface LoveWordsState {
	wordList: LoveWord[];
}
