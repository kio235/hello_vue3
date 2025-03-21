import { defineStore } from "pinia";

const useCountStore = defineStore("count", {
	state: () => ({
		sum: 0,
		changeCount: 0,
	}),
	actions: {
		add(n: number) {
			this.sum += n;
			this.changeCount += 1;
		},
		minus(n: number) {
			this.sum -= n;
			this.changeCount += 1;
		},
	},
	getters: {
		bigSum(state) {
			return state.sum*10;
		},
	},
});

export default useCountStore;
