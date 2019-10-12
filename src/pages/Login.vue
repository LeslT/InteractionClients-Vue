<!-- Vista del login -->
<template>
<div>
<v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-text-field v-model="email" :rules="[emailRules, rules.required]" label="Email" required outlined clearable dense></v-text-field>

        <v-text-field
          :append-icon="show4 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.emailMatch]"
          :type="show4 ? 'text' : 'password'"
          v-model="message4"
          label="Contraseña"
          outlined
          clearable
          dense
          @click:append="show4 = !show4"
        ></v-text-field>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn to="/person" text>Iniciar sesión</v-btn>
      <v-btn to="/register" text>Registrarse</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>

export default {
  name: "Login",
  data: function() {
    return {
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "Password",
      
      
    rules: {
        required: value => !!value || "Este campo es obligatorio.",
        emailMatch: () => "La identificación o la contraseña no coinciden"
      },
    emailRules:[
        email => !!email || "El correo es requerido",
        email => /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/||  "El correo no es valido"
        ]
    };
  }
};
</script>

<style>
</style>