<template>
    <v-card class="mx-auto" max-width="1150">
        <v-list lines="two">
            <v-list-subheader>
                <v-col cols="auto">
                    <v-btn @click="abrirDialog" icon="mdi-plus" size="small"></v-btn>
                </v-col>
            </v-list-subheader>

            <v-dialog v-model="dialogVisible" max-width="600">
                <v-card>
                    <v-card-title class="mx-2">Agregar Equipo</v-card-title>
                    <template v-slot:append>
                        <v-btn icon="$close" variant="text" @click="cerrarDialog"></v-btn>
                    </template>
                    <v-card-text>
                        <!-- Formulario aquí -->
                        <v-form @submit.prevent="guardarEquipo">
                            <v-row class=" ">
                                <v-col cols="12" sm="6">
                                    <v-select :items="tipos" density="comfortable" label="Tipo" v-model="equipoPost.tipo" ></v-select>
                                    <v-textarea label="Descripcion" v-model="equipoPost.descripcion"></v-textarea>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select :items="estados" density="comfortable" label="Estado" v-model="equipoPost.estado" ></v-select>
                                    <!-- Otros campos del Equipo -->
                                </v-col>
                            </v-row>

                            <v-row align="center" justify="center" class="my-5">
                                <v-btn type="submit" class="me-2 text-none " color="#4f545c"
                                    prepend-icon="mdi-arrow-up-bold-box-outline" variant="flat">
                                    Añadir
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-dialog>

            <v-list-item v-for="equipo in equipos" :key="equipo.id">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            {{ equipo.id }}
                        </v-expansion-panel-title>

                        <v-expansion-panel-text>
                            <v-card class="mx-auto" max-width="1150">
                                <v-window show-arrows>
                                    <v-window-item :key="1">
                                        <v-card height="auto" class="mx-auto ">
                                            <v-row>
                                                <v-card-title class="text-h4 my-7 mx-7">{{ equipo.tipo }}</v-card-title>

                                                <v-spacer></v-spacer>
                                                <v-btn icon="$close" variant="text" @click="deleteEquipo(equipo.id, equipo)"
                                                    class="my-5 mx-6"></v-btn>
                                            </v-row>

                                            <v-card-text class="text-h6 mx-7">
                                                <v-row class="my-3">

                                                    <v-col cols="4">

                                                        Estado

                                                    </v-col>
                                                    <v-col cols="8">
                                                        {{ equipo.estado }}
                                                    </v-col>

                                                </v-row>

                                                <v-divider inset></v-divider>

                                                <v-row class="my-3">
                                                    <v-col cols="4">

                                                        Descripcion

                                                    </v-col>
                                                    <v-col cols="8">
                                                        {{ equipo.descripcion }}
                                                    </v-col>
                                                </v-row>

                                                <v-divider inset></v-divider>

                                                <v-row class="my-3">
                                                    <v-col cols="4">

                                                        Mision

                                                    </v-col>
                                                    <v-col cols="8">
                                                        {{ equipo.mision ?  equipo.mision.codigo : "" }}
                                                    </v-col>
                                                </v-row>

                                            </v-card-text>
                                        </v-card>
                                    </v-window-item>

                                    <v-window-item :key="2">
                                        <v-card height="280" max-width="1150" class="mx-auto">
                                            <v-row class="mx-16 my-4">
                                                <v-col cols="12" sm="6">
                                                    <v-select :items="tipos" density="comfortable" label="Tipo" v-model="equipoPost.tipo" ></v-select>
                                                    <v-textarea label="Descripcion"
                                                        v-model="equipo.descripcion"></v-textarea>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-row class="my-1">
                                                        <v-select :items="estados" density="comfortable" label="Estado" v-model="equipoPost.estado" ></v-select>
                                                    </v-row>
                                                    <v-row class="d-flex justify-center align-end">
                                                        <v-btn class="me-2 text-none mx-14 my-14" color="#4f545c"
                                                            prepend-icon="mdi-arrow-up-bold-box-outline" variant="flat"
                                                            @click="putEquipo(equipo.id, equipo)">
                                                            Modificar
                                                        </v-btn>
                                                    </v-row>



                                                </v-col>
                                            </v-row>


                                        </v-card>
                                    </v-window-item>

                                    <v-window-item :key="3">
                                        <v-card height="280" max-width="1150" class="mx-auto">
                                            <v-card-title class="my-4 mx-3">Añadir Mision</v-card-title>
                                            <v-divider></v-divider>
                                            <v-row class="mx-16 my-5">
                                                <v-col class="text-end align-center">
                                                    <v-label class="mx-4 my-3 text-h6 ">Mision:</v-label>
                                                </v-col>
                                                <v-col>
                                                    <v-text-field label="Codigo" prepend-icon=""
                                                        v-model="misionCod"></v-text-field>
                                                </v-col>
                                                <v-spacer></v-spacer>
                                            </v-row>

                                            <v-row align="center" justify="center">
                                                <v-btn class="me-2 text-none " color="#4f545c"
                                                    prepend-icon="mdi-arrow-up-bold-box-outline" variant="flat"
                                                    @click="añadirMision(equipo.id, misionCod)">
                                                    Añadir
                                                </v-btn>
                                            </v-row>
                                        </v-card>
                                    </v-window-item>
                                </v-window>
                            </v-card>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-list-item>
        </v-list>
    </v-card>
</template>
  

<script>
import { useEquiposStore } from "../store/equipo";
import { useAuthStore } from "../store/authStore";

export default {
    data() {
        return {
            equipos: [],
            equipo: {
                tipo: "",
                descripcion: "",
                estado: "",
                codigoMision: null,
                mision: {
                    codigo: "",
                    descripcion: "",
                    estado: "",
                },
            },
            equipoPost: {
                tipo: "",
                descripcion: "",
                estado: "",

            },
            dialogVisible: false,
            equiposStore: null,
            estados: ["Disponible", "En uso"],
            tipos   : ["Software", "Hardware"],
            misionCod: "",
            authStore: null,

        };
    },

    mounted() {
        this.equiposStore = useEquiposStore();
        this.getEquipos();

        this.authStore = useAuthStore();
        if (!this.authStore.isTokenValid()) {
            this.$router.push({ name: "Login" });
        }
    },

    methods: {
        async getEquipos() {
            this.equipos = await this.equiposStore.getEquipos();
        },
        async guardarEquipo() {
            await this.equiposStore.postEquipo(this.equipoPost);
            this.equipoPost.tipo = "";
            this.equipoPost.descripcion = "";
            this.equipoPost.estado = "";
            this.equipoPost.codigoMision = "";
            await this.getEquipos();
            this.dialogVisible = false; // Cierra el diálogo después de guardar
        },
        async deleteEquipo(id) {
            await this.equiposStore.deleteEquipo(id);
            await this.getEquipos();
        },
        async putEquipo(id, equipoPut) {
            await this.equiposStore.putEquipo(id, equipoPut);
            await this.getEquipos();
        },
        async añadirMision(idEquipo, idOperativo) {
            this.misionCod = "";
            await this.equiposStore.añadirMision(idEquipo, idOperativo);
            await this.getEquipos();
        },
        abrirDialog() {
            this.dialogVisible = true;
        },
        cerrarDialog() {
            this.dialogVisible = false;
        },
    },
};
</script>
