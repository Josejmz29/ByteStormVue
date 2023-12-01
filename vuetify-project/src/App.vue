<template>
  <v-theme-provider theme="dark" with-background class="pa-10">
    <div id="app">
      <v-app>
        <v-main>
          <v-toolbar color="grey">
            <v-toolbar-title>ByteStorm</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn variant="text" @click="navigateTo('/operativos')">Operativo</v-btn>
              <v-divider vertical></v-divider>
              <v-btn variant="text" @click="navigateTo('/misiones')">Mision</v-btn>
              <v-divider vertical></v-divider>
              <v-btn variant="text" @click="navigateTo('/equipos')">MEquipo</v-btn>
            </v-toolbar-items>
            <v-divider vertical></v-divider>
            <v-app-bar-nav-icon class="ms-2"></v-app-bar-nav-icon>
          </v-toolbar>

          <div class="my-10"></div>

          <router-view></router-view>
        </v-main>
      </v-app>
    </div>
  </v-theme-provider>
</template>

<script>
import { createVuetify } from 'vuetify';
import OperativoList from "./components/OperatrivosList.vue";


export const vuetify = createVuetify({

})


export default {
  name: "App",
  components: {},
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
