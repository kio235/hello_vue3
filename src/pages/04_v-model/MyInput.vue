<template>
	<div>
		<input
			type="text"
			:value="props.modelValue"
			@input="
				emits(
					'update:modelValue',
					($event.target as HTMLInputElement).value
				)
			"
		/>
	</div>
</template>

<script setup lang="ts" name="MyInput">
const props = defineProps({
	modelValue: {
		type: String,
	},
});

const emits = defineEmits(["update:modelValue"]);
</script>

<style scoped>
input {
	background-color: whitesmoke;
	border-color: whitesmoke;
	border-radius: 5px;
	border: 2px;
	padding: 5px;
	height: 20px;
	width: 150px;
}
</style>
