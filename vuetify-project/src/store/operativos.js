import { defineStore } from 'pinia';
import { fetchOperativosApi } from './OperativoApi';

export const useOperativosStore = defineStore('operativos', {
    state: () => ({
        operativos: [],

    }),

    actions: {

        async fetchOperativos() {     
                this.operativos = await fetchOperativosApi();
        }
    },
});