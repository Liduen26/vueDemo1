import { defineStore } from 'pinia';

export const useListCat = defineStore('categories', {
    state: () => {
        return { 
            listCat: ["Logement","Loisirs", "Manger"]
        };
    },
    actions: {
        add(string) {
            this.listCat.push(string);
        },
    },
});
