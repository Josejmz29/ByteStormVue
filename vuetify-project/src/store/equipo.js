import { defineStore } from "pinia";
import { getFetchEquiposApi } from "../api/equipoapi";
import { postFetchEquipoApi } from "../api/equipoapi";
import { putFetchEquipoApi } from "../api/equipoapi";
import { deleteFetchEquipoApi } from "../api/equipoapi";
import { añadirMisionApi } from "../api/equipoapi";

export const useEquiposStore = defineStore("equipos", {
    state: () => ({
      equipos: [],
    }),
  
    actions: {
      async getEquipos() {
        return (this.equipos = await getFetchEquiposApi());
      },
  
      async postEquipo(equipo) {
        return (this.equipos = await postFetchEquipoApi(equipo));
      },
  
      async putEquipo(id, equipo) {
        return (this.equipos = await putFetchEquipoApi(id, equipo));
      },
  
      async deleteEquipo(id) {
        return (this.equipos = await deleteFetchEquipoApi(id));
      },
  
      async añadirMision(idEquipo, idOperativo) {
        return (this.equipos = await añadirMisionApi(idEquipo, idOperativo));
      },
    },
  });