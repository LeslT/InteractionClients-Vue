<!-- Vista del login -->
<template >
  <div>
    <v-container>
      
      <v-row justify="center">
        <v-col cols="1" md="5" sm="2">
          <v-card class="mx-auto" max-width="400" outlined>
            <v-row justify="center">
              <v-col cols="1" md="4" sm="3">
                <h1>{{title}}</h1>
              </v-col>
            </v-row>
            <v-list-item three-line>
              <v-list-item-content>
                <v-text-field
                  v-model="email"
                  :rules="[emailRules, rules.required]"
                  label="Email"
                  required
                  outlined
                  clearable
                  dense
                ></v-text-field>

                <v-text-field
                  :append-icon="show4 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required]"
                  :type="show4 ? 'text' : 'password'"
                  v-model="password"
                  label="Contraseña"
                  outlined
                  clearable
                  dense
                  @click:append="show4 = !show4"
                ></v-text-field>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn v-on:click="loginEvent" text>Iniciar sesión</v-btn>
              <v-btn to="/register" text>Registrarse</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const fb = require("../../firebaseConfig");

export default {
  name: "Login",
  data: function() {
    return {
      title: "Inicio",
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "",
      email: "",
      rules: {
        required: value => !!value || "Este campo es obligatorio."
      },
      emailRules: [
        email => !!email || "El correo es requerido",
        email =>
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ||
          "El correo no es valido"
      ]
    };
  },
  methods: {
    loginEvent: function() {
      fb.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          this.$store.commit("setCurrentUser", response.user);
          this.$store.dispatch("fetchUserProfile");
          this.$router.push("/options");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>