<template>
  <v-container>
    <v-alert v-if="eliminado === true" type="success">Se eliminó el usuario.</v-alert>
    <v-row justify="left">
      <v-col cols="1" md="6" sm="3">
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Buscar"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn>Buscar</v-btn>
        <v-btn to="/register">Añadir</v-btn>
      </v-col>
    </v-row>

    <v-row justify="left">
      <v-col cols="1" md="6" sm="3">
        <v-card max-width="444">
          <v-list-item three-line>
            <v-list-item-content>
              <v-row pl-5 ml-5>
                <v-col>
                  <p>Nombre:</p>
                </v-col>
                <v-col>
                  <p justify="start">{{names}}</p>
                </v-col>
              </v-row>

              <v-row pl-5 ml-5>
                <v-col>
                  <p>Apellido:</p>
                </v-col>
                <v-col justify="left">
                  <p>{{lastNames}}</p>
                </v-col>
              </v-row>

              <v-row pl-5 ml-5>
                <v-col>
                  <p>Correo:</p>
                </v-col>
                <v-col justify="left">
                  <p>{{email}}</p>
                </v-col>
              </v-row>

              <v-row pl-5 ml-5>
                <v-col>
                  <p>Valido hasta:</p>
                </v-col>
                <v-col justify="left">
                  <p>{{valido}}</p>
                </v-col>
              </v-row>

              <v-row pl-5 ml-5>
                <v-col>
                  <p>Dependencias:</p>
                </v-col>
                <v-col justify="left">
                  <p v-for="depend in dependencies" v-bind:key="depend">{{depend}}</p>
                </v-col>
              </v-row>

              <v-row pl-5 ml-5>
                <v-col>
                  <p>Activo:</p>
                </v-col>
                <v-col justify="left">
                  <p v-if="activo === 'true'">Si</p>
                  <p v-else-if="activo === 'false'">No</p>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn v-on:click="loginEvent" text>Editar</v-btn>
            <v-btn v-on:click="deleteUser" text>Eliminar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

const fb = require("../../firebaseConfig");

export default {
  data: function() {
    return {
      eliminado: false
    };
  },
  methods: {
    deleteUser (){
    fb.usersCollection.doc(fb.auth.currentUser.uid).delete().then(() =>{
      fb.auth.currentUser.delete().then(()=> {
      //this.$set (dm this.eliminado = true)
      this.eliminado = true
      setTimeout(()=>{
        this.$router.push("/login");
      }, 2000);
    })
    })
    
  }},
  computed: mapState({
    names: state => state.userProfile.names,
    lastNames: state => state.userProfile.lastnames,
    email: state => state.userProfile.email,
    valido: state => state.userProfile.valido,
    dependencies: state => state.userProfile.dependencies,
    activo: state => state.userProfile.activo
  })
};
</script>

<style>
</style>