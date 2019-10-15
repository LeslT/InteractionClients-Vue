<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="1" md="7" sm="4">
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
                <v-btn @click="buscar(search)">Buscar</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card max-width="800" id="scroll-target" style="max-height: 400px" class="overflow-y-auto">
                    <v-list subheader>
                        <v-subheader>Usuarios</v-subheader>
                        <v-list-item elevation v-for="item1 in this.itemsUsers" 
                            :key="item1.names">
                           <v-list-item-content>
                                <v-list-item-title v-text="'Nombres:  ' +item1.names+ item1.lastnames + '  Dependencias: ' + item1.dependencies" ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                    </v-list>
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
      title: "Búsqueda de usuarios",
      itemsUsers: [],
      useritems: [],
      search: ""
    };
  },
  created(){
      this.cargadatos();
    },

    methods: {
        cargadatos: function(){
            let itemsUsers= []
            let useritems = [];

            fb.usersCollection.get().then( async querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.itemsUsers.push(doc.data())
            });
            useritems = await itemsUsers.map(function(user) {
                useritems.push(user.names);
                });
          });
            this.itemsUsers = useritems;
        },
        buscar: function(search){
            let itemsUsers= [];
            let useritems = [];
            window.console.log(search)
            fb.usersCollection.where("users.names", "array-contains", search).get().then( async querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.itemsUsers.push(doc.data())
            });
            useritems = await itemsUsers.map(function(user) {
                useritems.push(user.names);
                });
          });
            this.itemsUsers = useritems;
            window.console.log(this.itemsUsers)
        },
    }

}
</script>

<style>

</style>