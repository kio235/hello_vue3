import { defineStore } from "pinia";
import { computed, ref } from "vue";

// const useCountStore = defineStore("count", {
// 	state: () => ({
// 		sum: 0,
// 		changeCount: 0,
// 	}),
// 	actions: {
// 		add(n: number) {
// 			this.sum += n;
// 			this.changeCount += 1;
// 		},
// 		minus(n: number) {
// 			this.sum -= n;
// 			this.changeCount += 1;
// 		},
// 	},
// 	getters: {
// 		bigSum(state) {
// 			return state.sum*10;
// 		},
// 	},
// });

const useCountStore = defineStore("count", () => {
	// state
	const sum = ref(0);
	const changeCount = ref(0);

	// getters
	const bigSum = computed(() => sum.value * 10);

	// actions
	function add(n: number) {
		sum.value += n;
		changeCount.value += 1;
	}
	function minus(n: number) {
		sum.value -= n;
		changeCount.value += 1;
	}
	return { sum, changeCount, bigSum, add, minus };
});

export default useCountStore;
