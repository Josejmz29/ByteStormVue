import { defineStore } from "pinia";
import { getFetchMisionesApi } from "../api/misionapi";
import { postFetchMisionApi } from "../api/misionapi";
import { putFetchMisionApi } from "../api/misionapi";
import { deleteFetchMisionApi } from "../api/misionapi";

export const useMisionesStore = defineStore("misiones", {
  state: () => ({
    misiones: [],
  }),

  actions: {
    async getMisiones() {
      return (this.misiones = await getFetchMisionesApi());
    },

    async postMision(mision) {
      return (this.misiones = await postFetchMisionApi(mision));
    },

    async putMision(id, mision) {
      return (this.misiones = await putFetchMisionApi(id, mision));
    },

    async deleteMision(id) {
      return (this.misiones = await deleteFetchMisionApi(id));
    },
  },
});
