import { onMounted, ref } from "vue";


export default function () {
	let num = ref(0);
	onMounted(()=>{
		console.log('mount num')
	})
	return { num };
}
