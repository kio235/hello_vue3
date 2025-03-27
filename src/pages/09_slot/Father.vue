<template>
	<div class="father">
		<h2>我是父组件</h2>
		<div class="cards">
			<Category title="热门游戏">
				<template v-slot:content="message">
					{{ message }}
					<ul>
						<li v-for="game in games">{{ game }}</li>
					</ul>
				</template>
				<template #title>
					<h2>热门游戏</h2>
				</template>
			</Category>
			<Category title="今日豪车">
				<template v-slot:content>
					<img :src="imgUrl" alt="" />
				</template>
			</Category>
			<Category title="影视推荐" />
		</div>
	</div>
</template>

<script setup lang="ts" name="father">
import { reactive } from "vue";
import Category from "./Category.vue";

const games = reactive(["CS2", "LOL", "GTA"]);
let imgUrl =
	"https://assets.oneweb.mercedes-benz.com/bbd/images/v1/4897/c/71/8ec7521e34cad5709642f3b9425328cd79f8a.png?im=Resize%2Cwidth%3D610";
</script>

<style scoped>
.father {
	background-color: rgb(230, 230, 230);
	margin: 10px;
	padding: 15px;
	border-radius: 10px;
}
.cards {
	display: flex;
	gap: 20px;
}

img {
	width: 100%;
}
</style>
