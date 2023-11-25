
<template>
    <v-card class="mx-auto" max-width="825">
        <v-list lines="two">
            <v-list-subheader>Today</v-list-subheader>



            <v-divider inset></v-divider>

            <v-list-item v-for="operativo in operativos" :key="operativo.id">

                <v-expansion-panels>
                    <v-expansion-panel  >
                    <v-expansion-panel-title>
                        {{ operativo.nombre }}
                    </v-expansion-panel-title>


                        <v-expansion-panel-text>
                            {{ operativo.nombre }} - {{ operativo.rol }} - {{ operativo.misionAsignada }}
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
            ],
        };
    },
};
</script>

