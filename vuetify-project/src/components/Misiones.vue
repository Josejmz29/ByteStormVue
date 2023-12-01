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
                    <v-card-title>Agregar Mision</v-card-title>
                    <template v-slot:append>
                        <v-btn icon="$close" variant="text" @click="cerrarDialog"></v-btn>
                    </template>
                    <v-card-text>
                        <!-- Formulario aquí -->
                        <v-form @submit.prevent="guardarMision">

                            <v-row class="mx-16 ">

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Código" prepend-icon=""></v-text-field>
                                    <v-select :items="items" density="comfortable" label="Comfortable"></v-select>

                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-textarea label="Descripcion"></v-textarea>
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

            <v-list-item v-for="mision in misiones" :key="mision.id">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            {{ mision.codigo }}
                        </v-expansion-panel-title>

                        <v-expansion-panel-text>
                            <v-card class="mx-auto" max-width="1150">
                                <v-window show-arrows>
                                    <v-window-item :key="1">
                                        <v-card height="300" class="mx-auto ">


                                            <v-row>
                                                <v-card-title class="text-h4 my-7 mx-7">{{ mision.codigo
                                                }}</v-card-title>

                                                <v-card-title class="text-h7 my-7 mx-2 ">{{ mision.estado }}</v-card-title>
                                                <v-spacer></v-spacer>
                                                <v-btn icon="$close" variant="text"
                                                    @click=" deleteMision(mision.id, mision)" class="my-5 mx-6"></v-btn>
                                            </v-row>


                                            <v-card-text class="text-h6 mx-7">

                                                <v-table theme="dark">

                                                    <tbody>
                                                        <tr>
                                                            <td>Código</td>
                                                            <td>{{ mision.codigo }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Estado</td>
                                                            <td>{{ mision.estado }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Operativo</td>
                                                            <td>{{ mision.operativoAsignadoId }}</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Descripcion</td>
                                                            <td>
                                                                <p class="text-left ">{{ mision.descripcion }}</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </v-table>

                                            </v-card-text>
                                        </v-card>
                                    </v-window-item>

                                    <v-window-item :key="2">
                                        <v-card height="280" max-width="1150" class="mx-auto">


                                            <v-row class="mx-16 my-4">

                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="Código" prepend-icon=""></v-text-field>
                                                    <v-select :items="items" density="comfortable"
                                                        label="Comfortable"></v-select>

                                                </v-col>

                                                <v-col cols="12" sm="6">
                                                    <v-textarea label="Descripcion"></v-textarea>
                                                </v-col>
                                            </v-row>

                                            <v-row align="center" justify="center">
                                                <v-btn class="me-2 text-none " color="#4f545c"
                                                    prepend-icon="mdi-arrow-up-bold-box-outline" variant="flat"
                                                    @click="putMision(mision.id, mision)">
                                                    Modificar
                                                </v-btn>
                                            </v-row>



                                        </v-card>
                                    </v-window-item>

                                    <v-window-item :key="3">
                                        <v-card height="280" max-width="1150" class="mx-auto">

                                            <v-card-title class="my-4 mx-3">Añadir operativo</v-card-title>
                                            <v-divider></v-divider>
                                            <v-row class="mx-16 my-5">


                                                <v-col class="text-end align-center">
                                                    <v-label class="mx-4 my-3 text-h6 ">Operativo:</v-label></v-col>
                                                <v-col><v-text-field label="id" prepend-icon=""></v-text-field></v-col>

                                                <v-spacer></v-spacer>

                                            </v-row>

                                            <v-row align="center" justify="center">
                                                <v-btn class="me-2 text-none " color="#4f545c"
                                                    prepend-icon="mdi-arrow-up-bold-box-outline" variant="flat"
                                                    @click="putMision(mision.id, mision)">
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
import { useMisionesStore } from "../store/mision";

export default {
    data() {
        return {
            misiones: [],
            mision: {
                codigo: "",
                descripcion: "",
                estado: "",
                operativoAsignadoId: "",
                operativo: {
                    id: "",
                    nombre: "",
                    rol: "",
                },
            },
            items: ["planificada", "En curso", "Completada"],
            dialogVisible: false,
            misionesStore: null,
        };
    },

    mounted() {
        this.misionesStore = useMisionesStore();
        this.getMisiones();
    },

    methods: {
        async getMisiones() {
            this.misiones = await this.misionesStore.getMisiones();
        },
        async guardarMision() {
            await this.misionesStore.postMision(this.mision);
            this.mision.nombre = "";
            this.mision.rol = "";
            await this.getMisiones();
            this.dialogVisible = false; // Cierra el diálogo después de guardar
        },
        async deleteMision(id) {
            await this.misionesStore.deleteMision(id);
            await this.getMisiones();
        },
        async putMision(id, misionPut) {
            await this.misionesStore.putMision(id, misionPut);
            this.mision.nombre = "";
            this.mision.rol = "";
            await this.getMisiones();
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
