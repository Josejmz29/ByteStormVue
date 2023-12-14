<template>
        <v-card
            class="mx-auto my-8"
            width="600"
            height="320"
            link
        >

        <v-card-title class="d-flex justify-end mx-3 my-3">
            <v-icon size="50" color="green"  >mdi-check-circle</v-icon>
        </v-card-title>

        <v-card-title class="d-flex justify-center">
                <v-spacer></v-spacer>
           
                <h1 class="text-h5">Registro con éxito </h1>
                <v-spacer></v-spacer>

        </v-card-title>
        <v-card-text class="my-4 ">
                <h2 class="text-h6">Bienvenido a la aplicación de gestión de operativos</h2>
                <p>Ditígete al login para iniciar sesión y acceder a tu cuenta</p>
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
        <v-btn
            color="primary"
            text
            @click="$router.push('/login')"
        >
            Ir al login
        </v-btn>
    </v-card-actions>

    

</v-card>
  </template>

  <script>

</script>