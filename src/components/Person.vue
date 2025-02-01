<template>
    <div class="person">
        <h2>name: {{ name }}</h2>
        <h2>age: {{ age }}</h2>
        <button @click="showTel">check phone number</button>
    </div>
</template>

<script lang="ts">
export default{
    name: 'Person',
    data(){
        return{
            name:'ZS',
            age:18,
            tel:18888888888
        }
    },
    methods:{
        showTel(){
            alert(this.tel)
        }
    }
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    color: white;
}
</style>