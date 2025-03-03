<template>
    <ul class="news-list">
        <li>ID: {{ route.params.id }}</li>
        <li>Title: {{ route.params.title }}</li>
        <li>Content: {{ route.params.content }}</li>
    </ul>
</template>

<script setup>
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

</script>