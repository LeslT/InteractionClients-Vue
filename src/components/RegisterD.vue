<template>
  <div class="principal">
    <div class="form">
      <v-alert v-if="agregado === true" type="success">Se agregó la nueva dependencia.</v-alert>
      <v-card class="mx-auto" max-width="500" outlined>
        <v-container>
          <v-row justify="center">
            <v-col cols="1" md="4" sm="3">
              <h1>{{title}}</h1>
            </v-col>
          </v-row>
          <div class="registerContent">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row justify="center">
                <v-col cols="1" md="6" sm="2">
                  <v-text-field v-model="names" :rules="nameRules" label="Nombre" required></v-text-field>
                </v-col>
              </v-row>
            </v-form>
            <v-row justify="center">
              <v-col cols="1" md="6" sm="2">
                <v-text-field v-model="coordinador" :rules="nameRules" label="Coordinador" required></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="1" md="6" sm="2">
                <v-text-field
                  v-model="mxmUsers"
                  :rules="nameRules"
                  label="Maximos de usuarios"
                  required
                  type="number"
                  min="1"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="1" md="6" sm="2">
                <v-text-field v-model="ubication" :rules="nameRules" label="Ubicación" required></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="1" md="3" sm="1">
                <p>
                  <v-checkbox
                    v-model="activo"
                    label="Activo"
                    color="primary"
                    value="true"
                    id="enabled"
                    hide-details
                  ></v-checkbox>
                </p>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="1" md="3" sm="1">
                <v-btn
                  :disabled="disabledButtonRegister"
                  style="margin:5px;background:#08799C"
                  v-on:click="registerEvent"
                >Aceptar</v-btn>
              </v-col>
              <v-col cols="2" md="3" sm="1">
                <v-btn
                  :disabled="disabledButtonRegister"
                  style="margin:5px;background:#08799C"
                  to="/"
                >Cancelar</v-btn>
              </v-col>
            </v-row>
          </div>
          <input type="button" v-on="signup" />
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import { async } from "q";
import moment from 'moment'

const fb = require("../../firebaseConfig");

export default {
    data: () => ({
      title: "Registro dependencias",
      names: "",
      coordinador: "",
      mxmUsers: "",
      ubication: "", 
      activo:"false",
      agregado: false
    }),
    methods: {
    registerEvent: function() {
      const depInfo = {
        nombre: this.names,
        coordinador: this.coordinador,
        numeroMaximoUsuarios: this.mxmUsers,
        ubicacion: this.ubication,
        activa: this.activo,
      };
          fb.dependenciesCollection
            .doc()
            .set(depInfo)
            .then(response => {
              this.agregado = true;
            setTimeout(() => {
              this.$router.push("/options");
            }, 2000);
            });
        }
    }
  }
</script>

<style>
</style>