<script setup>
    import { useListDep } from "@/stores/listDep.js";
    const listDepStore = useListDep();
</script>

<template>
    <table border="1">
        <thead>
            <td>Date</td><td>Montant</td><td>Description</td><td>Catégorie</td><td>Actions</td>
        </thead>
        <tbody>
            <tr v-for="(obj, id) in listDepStore.listDep">
                <td>{{ obj.date }}</td>
                <td>{{ obj.montant }} €</td>
                <td>{{ obj.description}}</td>
                <td>{{ obj.categorie }}</td>
                <td><button @click="listDepStore.delLine(id)" class="delete">X</button></td>
            </tr>
        </tbody>
    </table>
</template>


<style scoped>
    table {
        width: 80%;
    }
</style>