
<template>
    <v-card class="mx-auto" max-width="1150">
        <v-list lines="two">
            <v-list-subheader>
                <v-col cols="auto">
                    <v-btn icon="mdi-plus" size="small"></v-btn>
                </v-col>
            </v-list-subheader>



            <v-list-item v-for="operativo in operativos" :key="operativo.id">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            {{ operativo.nombre }}
                        </v-expansion-panel-title>

                        <v-expansion-panel-text>
                            <v-card class="mx-auto" max-width="1150">
                                <v-window v-model="onboarding" show-arrows>
                                    <v-window-item :key="1">
                                        <v-card height="300" class="mx-auto ">
                                            <v-row>
                                                <v-card-title class="text-h4 my-7 mx-7">{{ operativo.nombre
                                                }}</v-card-title>
                                                <v-spacer></v-spacer>
                                                <v-card-title class="text-h7 my-7 mx-8">{{ operativo.rol }}</v-card-title>
                                            </v-row>


                                            <v-card-text class="text-h6 mx-7">
                                                {{ operativo.misionAsignada }}
                                            </v-card-text>
                                        </v-card>
                                    </v-window-item>

                                    <v-window-item :key="2">
                                        <v-card height="450" max-width="1150" class="mx-auto">
                                            <v-row class="mx-16 my-1">

                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="Nombre" prepend-icon=""></v-text-field>
                                                </v-col>

                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="Rol" prepend-icon="" variant="solo"></v-text-field>
                                                </v-col>
                                                <v-card-text>Añadir mision</v-card-text>
                                                <v-divider></v-divider>
                                            </v-row>

                                            <v-row class="mx-16 ">

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
                                                    prepend-icon="mdi-arrow-up-bold-box-outline" variant="flat">
                                                    Guardar
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


export default {
    data() {
        return {
            operativos: [
                { id: 1, nombre: 'Operativo 1', rol: 'Agente', misionAsignada: 'Misión 1' },
                { id: 2, nombre: 'Operativo 2', rol: 'Agente', misionAsignada: 'Misión 2' },
                // Agregar más operativos según sea necesario
            ], length: 2,
            onboarding: 0,
            select: null,
            items: ['Planificada', 'Activa', 'Completada'],
        };
    },


};










</script>

