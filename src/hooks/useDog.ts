import axios from "axios";
import { onMounted, reactive } from "vue";


export default function () {
	let dogList = reactive([
		"https://images.dog.ceo/breeds/pug/n02110958_353.jpg",
	]);

	onMounted(()=>{
		console.log('mount dog')
	})

	async function getNewDog() {
		try {
			let result = await axios.get(
				"https://dog.ceo/api/breeds/image/random"
			);
			console.log(result.data);
			dogList.push(result.data.message);
		} catch (error) {
			alert(error);
		}
	}
	return { dogList, getNewDog };
}
