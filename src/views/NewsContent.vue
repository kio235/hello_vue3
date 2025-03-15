<template>
    <ul class="news-list">
        <li>ID: {{ id }}</li>
        <li>Title: {{ title }}</li>
        <li>Content: {{ content }}</li>
    </ul>
</template>

<script setup lang="ts">
// const props = defineProps({
//     id: {
//         type: String,
//         required: true,
//     },
//     title: {
//         type: String,
//         required: true,
//     },
//     content: {
//         type: String,
//         required: true,
//     },
// })

const props = defineProps(['id','title','content'])

console.log(props)

</script>