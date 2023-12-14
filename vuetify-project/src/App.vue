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
              <v-btn variant="text" @click="navigateTo('/equipos')">Equipo</v-btn>
            </v-toolbar-items>
            <v-divider vertical></v-divider>
            
            <v-menu transition="scale-transition">
              <template v-slot:activator="{ props }">
                <v-app-bar-nav-icon  v-bind:="props" class="ms-2"></v-app-bar-nav-icon>
              </template>

              <v-list>
                <v-list-item >
                  <v-list-item-title class="d-flex">
                    <v-btn variant="text" @click="navigateTo('/login')" >Login</v-btn>
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="d-flex">
                  <v-btn variant="text" @click="navigateTo('/register')" >Sign up</v-btn>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="d-flex">
                  <v-btn variant="text" @click="navigateTo('/login')" >Sign out</v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
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
