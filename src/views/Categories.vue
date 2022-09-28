<script>
    export default {
        data() {
            return {
                categoriesList: [
                    "Loisir",
                    "Manger",
                    "Logement"
                ]
            }
        }
    }
</script>

<template>
   <h2>Catégories</h2>

    <li v-for="cat in this.categoriesList">{{ cat }}</li>
</template>

<style scoped>
    
</style>
