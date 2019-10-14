<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col cols="1" md="4" sm="3">
        <h1>{{title}}</h1>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="4">
        <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            <v-card-title> Editar mi usuario</v-card-title>
            <v-card-actions>
              <v-btn color="purple" text to="manageUser">Ir</v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
       <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            <v-card-title> Gestionar dependencias</v-card-title>
            <v-card-actions>
              <v-btn color="purple" text to="/manageDependencies">Ir</v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
       <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            <v-card-title>Buscar usuarios</v-card-title>
            <v-card-actions>
              <v-btn color="purple" text to="/listUsers">Ir</v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      title: "Opciones de usuario",
      show: false,
    }),
}
</script>

<style>

</style>