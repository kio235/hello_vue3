import { defineStore } from "pinia";

const useCountStore = defineStore("count", {
	state() {
		return {
			sum: 0,
		};
	},
});

export default useCountStore