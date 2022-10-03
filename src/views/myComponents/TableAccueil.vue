<script setup>
    import { useListDep } from "@/stores/listDep.js";

    const listDepStore = useListDep();
</script>

<script>
    
</script>

<template>
    <table border="1">
        <thead>
            <tr>
                <td>Catégories</td><td>Dépenses</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(price, cat) in listDepStore.calcAccueil()">
                <td>{{ cat }}</td>
                <td>{{ price }} €</td>
            </tr>
        </tbody>
    </table>
</template>