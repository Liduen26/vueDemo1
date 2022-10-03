import { defineStore } from 'pinia';

export const useListDep = defineStore('depenses', {
    state: () => {
        return { 
            listDep: [{
                date: "10/03/2022", montant: "47", description: "Elden Ring", categorie: "Loisirs"
            }]
        };
    },
    actions: {
        add(arg) {
            this.listDep.push(arg);
        },
        delLine(id) {
            this.listDep.splice(id, 1);
        },
        calcAccueil() {
            let list = {};

            for (const obj of this.listDep ) {
                if (list[obj.categorie] === undefined) {
                    list[obj.categorie] = 0;
                }

                list[obj.categorie] += Number(obj.montant);
            }

            return list;
        }
    },
    getters: {
        
    }
});
