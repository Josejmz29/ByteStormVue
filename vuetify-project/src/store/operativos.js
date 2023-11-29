import { defineStore } from 'pinia';
import { getFetchOperativosApi } from '../api/operativoapi';
import { postFetchOperativoApi } from '../api/operativoapi';
import { putFetchOperativoApi } from '../api/operativoapi';
import { deleteFetchOperativoApi } from '../api/operativoapi';

export const useOperativosStore = defineStore('operativos', {
    state: () => ({
        operativos: [],

    }),

    actions: {

       async  getOperativos() {
            
            return this.operativos = await getFetchOperativosApi();
           
          },

          async postOperativo(operativo) {

            return this.operativos = await postFetchOperativoApi(operativo);
          },

          async putOperativo(id,operativo) {

            return this.operativos = await putFetchOperativoApi(id,operativo);
          },
        async deleteOperativo(id,operativo) {

            return this.operativos = await deleteFetchOperativoApi(id);
        }
    },

});


  
