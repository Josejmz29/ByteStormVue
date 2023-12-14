<template>
    <v-row class="my-1">
        <v-col cols="1">

        </v-col>
        <v-col cols="5">
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="name" hide-details placeholder="Search name..." class="ma-2"
                        density="compact"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-select :items="items" density="comfortable" label="Comfortable"
                        v-model="misionPost.estado"></v-select>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="6">

        </v-col>

    </v-row>
    <v-card class="mx-auto" max-width="1150">
        <v-list lines="two">
            <v-list-subheader>
                <v-col cols="auto">
                    <v-btn @click="abrirDialog" icon="mdi-plus" size="small"></v-btn>
                </v-col>
            </v-list-subheader>

            <v-dialog v-model="dialogVisible" max-width="600">
                <v-card>
                    <v-card-title class="mx-2">Agregar Mision</v-card-title>
                    <template v-slot:append>
                        <v-btn icon="$close" variant="text" @click="cerrarDialog"></v-btn>
                    </template>
                    <v-card-text>
                        <!-- Formulario aquí -->
                        <v-form @submit.prevent="guardarMision">

                            <v-row class=" ">

                                <v-col cols="12" sm="6">
                                    <v-text-field label="Código" prepend-icon="" v-model="misionPost.codigo"></v-text-field>
                                    <v-select :items="items" density="comfortable" label="Comfortable"
                                        v-model="misionPost.estado"></v-select>

                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-textarea label="Descripcion" v-model="misionPost.descripcion"></v-textarea>
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
                                        <v-card height="auto" class="mx-auto ">


                                            <v-row>
                                                <v-card-title class="text-h4 my-7 mx-7">{{ mision.codigo
                                                }}</v-card-title>

                                                <v-card-title class="text-h7 my-7 mx-2 ">{{ mision.estado }}</v-card-title>
                                                <v-spacer></v-spacer>
                                                <v-btn icon="$close" variant="text"
                                                    @click=" deleteMision(mision.codigo, mision)" class="my-5 mx-6"></v-btn>
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
                                                            <td>{{
                                                                mision.operativoAsignado ? mision.operativoAsignado.nombre :
                                                                ''
                                                            }}</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Descripcion</td>
                                                            <td>
                                                                <p class="text-left ">{{ mision.descripcion }}</p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>Equipos</td>
                                                            <td>
                                                                <v-list v-for="n in mision.equipos" :key="n.id" lines="two">


                                                                    <v-list-item>
                                                                        <v-list-item-content>
                                                                            <v-list-item-title>{{ n.tipo
                                                                            }}</v-list-item-title>
                                                                            <v-list-item-subtitle>{{ n.estado
                                                                            }}</v-list-item-subtitle>

                                                                            {{ n.descripcion }}

                                                                        </v-list-item-content>



                                                                    </v-list-item>
                                                                </v-list>
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
                                                <v-col><v-text-field label="id" prepend-icon=""
                                                        v-model="operativoId"></v-text-field></v-col>

                                                <v-spacer></v-spacer>

                                            </v-row>

                                            <v-row align="center" justify="center">
                                                <v-btn class="me-2 text-none " color="#4f545c"
                                                    prepend-icon="mdi-arrow-up-bold-box-outline" variant="flat"
                                                    @click="añadirOperativo(mision.codigo, operativoId)">
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
import { useAuthStore } from "../store/authStore";
import * as signalR from "@microsoft/signalr";

export default {
    data() {
        return {
            misiones: [],
            mision: {
                codigo: "",
                descripcion: "",
                estado: "",
                operativoAsignadoID: null,
                operativoAsignado: {
                    id: "",
                    nombre: "",
                    rol: "",
                },
                equipos: [],
            },
            misionPost: {
                codigo: "",
                descripcion: "",
                estado: "",
            },
            items: ["planificada", "En curso", "Completada"],
            dialogVisible: false,
            misionesStore: null,
            operativoId: "",
            authStore: null,
            name: "",
            search: "",
            select: null,

        };
    },

    mounted() {
        this.misionesStore = useMisionesStore();
        this.getMisiones();
        this.authStore = useAuthStore();

        if (!this.authStore.isTokenValid()) {
            this.$router.push({ name: "Login" });
        }

    },
    watch: {
    name: 'filtrar', // Llama automáticamente a filtrar() cuando name cambia
    'misionPost.estado': 'filtrar', // Llama automáticamente a filtrar() cuando misionPost.estado cambia
  },

    methods: {
        async getMisiones() {
            this.misiones = await this.misionesStore.getMisiones();

            this.filtrar();

        },
        async guardarMision() {
            await this.misionesStore.postMision(this.misionPost);
            this.misionPost.codigo = "";
            this.misionPost.descripcion = "";
            this.misionPost.estado = null;
            await this.getMisiones();
            this.dialogVisible = false; // Cierra el diálogo después de guardar




        },
        async deleteMision(id) {
            await this.misionesStore.deleteMision(id);
            await this.getMisiones();
        },
        async putMision(id, misionPut) {
            await this.misionesStore.putMision(id, misionPut);

            await this.getMisiones();
        },
        async añadirOperativo(id, operativo) {
            await this.misionesStore.añadirOperativo(id, operativo);
            this.operativoId = "";
            await this.getMisiones();
        },
        abrirDialog() {
            this.dialogVisible = true;
        },
        cerrarDialog() {
            this.dialogVisible = false;
        },
        filtrar() {
            // Obtener una copia de todas las misiones
            let misionesFiltradas = [...this.misiones];

            // Aplicar filtro por nombre
            if (this.name !== "") {
                const filtroNombre = this.name.toLowerCase();
                misionesFiltradas = misionesFiltradas.filter((mision) =>
                    mision.codigo.toLowerCase().includes(filtroNombre)
                );
            }

            // Aplicar filtro por estado
            if (this.misionPost.estado !== "") {
                misionesFiltradas = misionesFiltradas.filter(
                    (mision) => mision.estado === this.misionPost.estado
                );
            }

            // Asignar las misiones filtradas a la propiedad misiones
            this.misiones = misionesFiltradas;
            console.log(this);
        }
    },
};
</script>
