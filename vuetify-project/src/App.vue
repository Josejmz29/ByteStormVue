<template>
  <v-theme-provider theme="dark" with-background class="pa-10">
  <div id="app">
    <v-app>
      <v-main>
        <v-toolbar color="grey">
    <template v-slot:prepend>
    </template>

   

    <v-toolbar-title>ByteStorm</v-toolbar-title>

    <v-spacer></v-spacer>

  
    <v-toolbar-items>
      <v-btn variant="text">Operativo</v-btn>

      <v-divider vertical></v-divider>

      <v-btn variant="text">Mision</v-btn>

      <v-divider vertical></v-divider>

      <v-btn variant="text">MEquipo</v-btn>
    </v-toolbar-items>

    <v-divider vertical></v-divider>
    

    

    <v-app-bar-nav-icon class="ms-2"></v-app-bar-nav-icon>
  </v-toolbar>

  <div class="my-10"></div>

 
        <OperativoList />
      </v-main>
    </v-app>
  </div>
</v-theme-provider>
</template>

<script>

import { createVuetify } from 'vuetify'

import OperativoList from "./components/OperatrivosList.vue";


export const vuetify = createVuetify({
  
})

export default {
    name: "App",
    components: { OperativoList }
};
</script>
