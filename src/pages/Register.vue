<template>
<div class="principal">
    <div class="form">
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
                <v-col cols="1" md="5" sm="2">
                  <v-text-field v-model="names" :rules="nameRules" label="Nombres" required></v-text-field>
                </v-col>
                <v-col cols="1" md="5" sm="2">
                  <v-text-field
                    v-model="lastnames"
                    :rules="lastnamesRules"
                    label="Apellidos"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="1" md="6" sm="2">
                  <v-text-field v-model="email" :rules="emailRules" label="Correo" required></v-text-field>
                  <v-label color="red" v-if="exist">El email ya está registrado</v-label>
                  <v-text-field
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
                  ></v-text-field>
                  <v-text-field
                    v-model="conPassword"
                    :append-icon="show4 ? 'visibility' : 'visibility_off'"
                    :rules="[rules.required, rules.emailMatch,rules.samePassword]"
                    :type="show4 ? 'text' : 'password'"
                    name="input-10-2"
                    label="Confirmar contraseña"
                    hint="Mínimo 8 caracteres"
                    value
                    class="input-group--focused"
                    required
                    @click:append="show4 = !show4"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
            <v-row justify="center">
              <v-col cols="1" md="6" sm="2">
                <v-select
                  v-model="validoHasta"
                  :menu-props="{ maxHeight: '400' }"
                  label="Seleccionar"
                  :items="valido"
                  item-text="name"
                  hint="Valido hasta"
                  persistent-hint
                ></v-select>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="1" md="6" sm="2">
                <v-select
                  v-model="dependence"
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
                <v-btn :disabled="disabledButtonRegister" style="margin:5px;background:#08799C" to="/">Aceptar</v-btn>
              </v-col>
              <v-col cols="2" md="3" sm="1">
                <v-btn :disabled="disabledButtonRegister" style="margin:5px;background:#08799C" to="/">Cancelar</v-btn>
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
export default {
    name: "Register",
    data: function() {
        return {
            title: "Registro",
            names: "",
            lastnames: "",
            email: "",
            password: "",
            conPassword: "",
            valido: ["no se","que es","esto"],
            dependencies: ["dependencia1","dependencia2"],
            exist:false,
            activo: false,

            show1: false,
            show2: true,
            show3: false,
            show4: false,

            rules: {
                required: value => !!value || "Required.",
                min: v => v.length >= 8 || "Min 8 characters",
                samePassword: value=> value===this.password || "Las contraseñas no coinciden"
            },
            nameRules: [
                name => !!name || "El nombre es requerido",
                name => name.length > 3 || "El nombre debe ser más largo a 3 caracteres"
            ],
            lastnameRules: [
                lastname => !!lastname || "El apellido es requerido",
                lastname =>
                lastname.length > 3 || "El apellido debe ser más largo a 3 caracteres"
            ],
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