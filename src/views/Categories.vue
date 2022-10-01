<script setup>
    import { useListCat } from "@/datas/listCat.js";
    const listCatStore = useListCat();
</script>

<template>
   <h2>Catégories</h2>

    <li v-for="cat in listCatStore.listCat">{{ cat }}</li>

    <p></p>

    <label>Ajouter une catégorie : <input type="text" v-model="this.toAdd"><button @click="listCatStore.add(this.toAdd)">OK</button></label>
</template>

<style scoped>
    
</style>
