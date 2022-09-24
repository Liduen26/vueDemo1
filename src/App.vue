<script>
    export default {
        data() {
            return {
                date: null,
                montant: null,
                description: null,
                categorie: "à venir",
                delete: `<button @click="delLine" class="delete">X</button>`,
                list: []
            }
        },
        methods: {
            submit() {
                // const newDate = new Date(this.date);
                // console.log(newDate);
                // const dateTransf = `${(newDate.getDay()<9?"0":"") + newDate.getDay()}/${(newDate.getMonth()<9?"0":"") + newDate.getMonth()}/${newDate.getFullYear()}`

                this.list.push({
                    date: new Intl.DateTimeFormat('fr-FR').format(new Date(this.date)),
                    montant: this.montant + "€",
                    description: this.description,
                    categorie: this.categorie,
                    delete: this.delete
                });

                this.date = null;
                this.montant = null;
                this.description = null;
            },

            delLine(id) {
                this.list.splice(id, 1);
            }
        }
    }
</script>

<template>
    
    <table border="1">
        <thead>
            <td>Date</td><td>Montant</td><td>Description</td><td>Catégorie</td>
        </thead>
        <tbody>
            <tr v-for="(obj, id) in list">
                <td>{{ obj.date }}</td>
                <td>{{ obj.montant }}</td>
                <td>{{ obj.description}}</td>
                <td>{{ obj.categorie }}</td>
                <td><button @click="delLine(id)" class="delete">X</button></td>
            </tr>
        </tbody>
    </table>
    <div class="form">
        <label>Date : <input type="date" v-model="date"></label>
        <label>Montant : <input type="number" v-model="montant"></label>
        <label>Description : <input type="text" v-model="description"></label>

        <button formnovalidate="true" v-on:click="submit">Ajouter</button>
    </div>
    
    
</template>

<style scoped>
table {
    width: 80%;
}

.form {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 30%;
    padding: 5px;
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
