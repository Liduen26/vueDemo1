<script setup>
    import { useListCat } from "@/stores/listCat.js";
    import { useListDep } from "@/stores/listDep.js";

    const listCatStore = useListCat();
    const listDepStore = useListDep();
</script>

<script>
    export default {
        data() {
            return {
                date: null,
                montant: null,
                description: null,
                categorie: this.listCatStore.listCat[0],
            };
        },
        methods: {
            submit() {
                this.listDepStore.add({
                    date: new Intl.DateTimeFormat("fr-FR").format(new Date(this.date)),
                    montant: this.montant,
                    description: this.description,
                    categorie: this.categorie
                });
                
                this.date = null;
                this.montant = null;
                this.description = null;
            },
        },
    }
</script>

<template>
    <div class="form">
        <label>Date : <input type="date" v-model="date"></label>
        <label>Montant : <input type="number" v-model="montant"></label>
        <label>Description : <input type="text" v-model="description"></label>
        <label>Catégorie : 
            <select v-model="categorie">
                <option v-for="cat in listCatStore.listCat">{{ cat }}</option>
            </select>
        </label>
        
        <button formnovalidate="true" v-on:click="submit">Ajouter</button>
    </div>
    
</template>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        width: fit-content;
        padding: 15px;
        border: 1px solid black;
    }
    
    .form button {
        width: 50%;
        margin: 15px;
    }
    
    .form label {
        display: flex;
        margin: 2px;
    }
</style>