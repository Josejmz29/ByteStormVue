
<template>

    <v-card class="mx-auto" max-width="1150">
        <v-list lines="two">

        <v-list-subheader v-if="showAlert">
                <v-alert type="info" title="Alert title" text="Hay una nueva mision disponible" variant="tonal" width="1150"
                    @close="showAlert = false" class="my-4 "></v-alert>
            </v-list-subheader>


            <v-list-subheader>
                <v-col cols="auto">
                    <v-btn @click="abrirDialog" icon="mdi-plus" size="small"></v-btn>
                </v-col>


            </v-list-subheader>

            <v-dialog v-model="dialogVisible" max-width="600">
                <v-card>
                    <v-card-title>Agregar Operativo</v-card-title>
                    <template v-slot:append>
                        <v-btn icon="$close" variant="text" @click="cerrarDialog"></v-btn>
                    </template>
                    <v-card-text>
                        <!-- Formulario aquí -->
                        <v-form @submit.prevent="guardarOperativo">

                            <v-row>
                                <v-col>
                                    <v-text-field label="Nombre" prepend-icon="" v-model=operativo.nombre></v-text-field>
                                    <v-text-field label="Rol" prepend-icon="" v-model=operativo.rol></v-text-field>

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

            <v-list-item v-for="operativo in operativos" :key="operativo.id">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            {{ operativo.nombre }}
                        </v-expansion-panel-title>

                        <v-expansion-panel-text>
                            <v-card class="mx-auto" max-width="1150">
                                <v-window show-arrows>
                                    <v-window-item :key="1">
                                        <v-card height="auto" class="mx-auto ">



                                            <v-row>
                                                <v-card-title class="text-h4 my-7 mx-7">{{ operativo.nombre
                                                }}</v-card-title>

                                                <v-card-title class="text-h7 my-7 mx-2 ">{{ operativo.rol }}</v-card-title>
                                                <v-spacer></v-spacer>
                                                <v-btn icon="$close" variant="text"
                                                    @click="deleteOperativo(operativo.id, operativo)"
                                                    class="my-5 mx-6"></v-btn>
                                            </v-row>


                                            <v-card-text class="text-h6 mx-7">



                                                <v-list v-for="n in operativo.misiones" :key="n.codigo" lines="two">


                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title>{{ n.codigo }}</v-list-item-title>
                                                            <v-list-item-subtitle>{{ n.estado }}</v-list-item-subtitle>
                                                        </v-list-item-content>

                                                    </v-list-item>
                                                </v-list>

                                            </v-card-text>
                                        </v-card>
                                    </v-window-item>

                                    <v-window-item :key="2">
                                        <v-card height="280" max-width="1150" class="mx-auto">


                                            <v-row class="mx-16 my-3">

                                                <v-col class="mx-16">
                                                    <v-text-field label="Nombre" prepend-icon=""
                                                        v-model=operativo.nombre></v-text-field>
                                                    <v-text-field label="Rol" prepend-icon=""
                                                        v-model=operativo.rol></v-text-field>

                                                </v-col>
                                            </v-row>

                                            <v-row align="center" justify="center">
                                                <v-btn class="me-2 text-none " color="#4f545c"
                                                    prepend-icon="mdi-arrow-up-bold-box-outline" variant="flat"
                                                    @click="putOperativo(operativo.id, operativo)">
                                                    Modificar
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





<script >



import { useOperativosStore } from "../store/operativos";
import { useAuthStore } from "@/store/authStore";
import { useSignalStore } from "@/store/signalStore";
import { HubConnectionBuilder } from "@microsoft/signalr";
import * as signalR from "@microsoft/signalr";



export default {

    data() {
        return {

            operativos: [],
            operativo: {
                nombre: "",
                rol: "",
                misiones: [],
            },
            items: ["planificada", "En curso", "Completada"],
            dialogVisible: false,
            operativosStore: null,
            authStore: null,
            connection: null,
            showAlert: false,
        };
    },

    mounted() {
        this.operativosStore = useOperativosStore();
        this.getOperativos();
        this.authStore = useAuthStore();

        if (!this.authStore.isTokenValid()) {
            this.$router.push({ name: "Login" });
        }

        this.initSignalR();
        
    },

    methods: {
        async getOperativos() {

            let that = this;
            this.operativos = await this.operativosStore.getOperativos();
            this.connection.on("ReceiveNotification", function () {
                that.showAlert = true;
                console.log("Recibido");
            });


        },
        async guardarOperativo() {

            await this.operativosStore.postOperativo(this.operativo);
            this.operativo.nombre = "";
            this.operativo.rol = "";
            await this.getOperativos();

            this.dialogVisible = false; // Cierra el diálogo después de guard
        },
        async deleteOperativo(id) {
            await this.operativosStore.deleteOperativo(id);
            await this.getOperativos();
        },
        async putOperativo(id, operativoPut) {


            await this.operativosStore.putOperativo(id, operativoPut);
            this.operativo.nombre = "";
            this.operativo.rol = "";
            await this.getOperativos();
        },

        abrirDialog() {
            this.dialogVisible = true;
        },
        cerrarDialog() {
            this.dialogVisible = false;
        },
        initSignalR() {
            const connection = new HubConnectionBuilder()
                .withUrl("http://localhost:5020/api/message")
                .build();

            connection.start().then(function () {
                console.log("Connected!");
            }).catch(function (err) {
                return console.error(err.toString());
            });

            this.connection = connection;


        },
    },

};



</script>

