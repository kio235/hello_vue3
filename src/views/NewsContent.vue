<template>
    <ul class="news-list">
        <li>ID: {{ query.id }}</li>
        <li>Title: {{ query.title }}</li>
        <li>Content: {{ query.content }}</li>
    </ul>
</template>

<script setup>
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
let {query} = toRefs(route)
</script>