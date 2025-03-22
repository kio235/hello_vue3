<template>
	<div class="grandchild">
		<h2>我是孙组件</h2>
	</div>
</template>

<script setup lang="ts" name="child"></script>

<style scoped>
.grandchild {
	background-color: lightpink;
	margin: 10px;
	padding: 5px;
	border-radius: 10px;
}
</style>
