<template>
  <v-container>
    <v-alert v-if="eliminado === true" type="success">Se eliminó el usuario.</v-alert>
    <v-row justify="center">
      <v-col cols="1" md="4" sm="3">
        <h1>{{title}}</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1" md="6" sm="3">
        <v-card max-width="444">
          <v-list-item three-line>
            <v-list-item-content>
              <v-row pl-5 ml-5>
                <v-col>
                  <p>Nombre:</p>
                </v-col>
                <v-col>
                  <input justify="start" v-model="names" :rules="nameRules" required>
                </v-col>
              </v-row>

              <v-row pl-5 ml-5>
                <v-col>
                  <p>Apellido:</p>
                </v-col>
                <v-col justify="left">
                  <input v-model="lastNames" :rules="lastnamesRules" required>
                </v-col>
              </v-row>
              <v-row pl-5 ml-5>
                <v-col>
                  <p>Contraseña:</p>
                </v-col>
                <v-col justify="left">
                  <input
                    v-model="password"
                    :append-icon="show3 ? 'visibility' : 'visibility_off'"
                    :rules="[rules.required, rules.emailMatch]"
                    :type="show3 ? 'text' : 'password'"
                    name="input-10-2"
                    label="Contraseña"
                    hint="Mínimo 8 caracteres"
                    value
                    class="input-group--focused"
                    required
                    @click:append="show3 = !show3"
                  >
                </v-col>
              </v-row>
              

              <v-row pl-5 ml-5>
                <v-col>
                  <p>Correo:</p>
                </v-col>
                <v-col justify="left">
                  <input v-model="email" :rules="emailRules" required>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col>
                  <p>Valido hasta:</p>
                </v-col>
              <v-col cols="1" md="6" sm="2">
                <v-menu v-model="menu1" :close-on-content-click="false" max-width="290">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="computedDateFormattedMomentjs"
                      clearable
                      label="Seleccionar"
                      readonly
                      v-on="on"
                      hint="Valido hasta"
                      persistent-hint
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="validoHasta" @change="menu1 = false"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

              <v-row pl-5 ml-5>
                <v-col>
                  <p>Dependencias:</p>
                </v-col>
                <v-col justify="left">
                  <v-select
                  v-model="selectedDependencies"
                  :items="dependencies"
                  item-text="name"
                  :menu-props="{ maxHeight: '400' }"
                  label="Seleccionar"
                  multiple
                  hint="Dependencias"
                  persistent-hint
                ></v-select>
                </v-col>
              </v-row>

              <v-row pl-5 ml-5>
                <v-col justify="center">
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
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn v-on:click="editUser" text>Aceptar</v-btn>
            <v-btn text to="/options">Atrás</v-btn>
            <v-btn
              v-if="this.$store.state.actualUser.uid === this.$store.state.userProfile.uid"
              v-on:click="deleteUser"
              text
              color="red"
            >Eliminar</v-btn>
             
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import moment from 'moment'

const fb = require("../../firebaseConfig");

export default {

  created(){
    window.console.log("sdadada");
    let dependencies = [];
    let depNombre = [];
    fb.dependenciesCollection.get().then(async function(querySnapshot) {
      await querySnapshot.forEach(function(doc) {
        dependencies.push(doc.data());
      });
      depNombre = await dependencies.map(function(dep) {
        depNombre.push(dep.nombre);
      });
    });
    window.console.log(depNombre);
    this.dependencies = depNombre;
  },
  data: function() {
    return {
      eliminado: false,
      title: "Edición de usuario",
      validoHasta: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      dependencies: [],
      selectedDependencies: [],
      actualUS: Object,
       show3: false,

      
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        samePassword: value =>
          value === this.password || "Las contraseñas no coinciden"
      },
      nameRules: [
        names => !!names || "El nombre es requerido",
        names =>
          names.length > 3 || "El nombre debe ser más largo a 3 caracteres"
      ],
      lastnameRules: [
        lastnames => !!lastnames || "El apellido es requerido",
        lastnames =>
          lastnames.length > 3 ||
          "El apellido debe ser más largo a 3 caracteres"
      ],
      emailRules: [
        email => !!email || "El correo es requerido",
        email => /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ || "El correo no es valido"
      ]
    };
  },
  methods: {
    deleteUser() {
      fb.usersCollection
        .doc(fb.auth.currentUser.uid)
        .delete()
        .then(() => {
          fb.auth.currentUser.delete().then(() => {
            this.eliminado = true;
            setTimeout(() => {
              this.$router.push("/login");
            }, 2000);
          });
        });
    },
    editUser() {
      
        
    }
  },
  computed: mapState({
    names: state => state.actualUser.names,
    lastNames: state => state.actualUser.lastnames,
    password: state => state.actualUser.password,
    email: state => state.actualUser.email,
    valido: state => state.actualUser.validoHasta,
    dependencies: state => state.actualUser.dependencies,
    activo: state => state.actualUser.activo,

    computedDateFormattedMomentjs() {
      return this.validoHasta ? moment(this.validoHasta).format("dddd, MMMM Do YYYY") : "";
    },
    computedDateFormattedDatefns() {
      return this.validoHasta ? format(this.validoHasta, "dddd, MMMM Do YYYY") : "";
    }
  })
};
</script>

<style>
</style>