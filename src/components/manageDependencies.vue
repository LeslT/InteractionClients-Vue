<template>
    <v-container>
        <v-alert v-if="eliminado === true" type="success">Se eliminó la dependencia.</v-alert>
        <v-row>
            <v-col>
            
        <v-card max-width="800" class="mx-auto">
            <v-list subheader>
                <v-subheader>Dependecias</v-subheader>
                <v-list-item elevation v-for="item in this.items" 
                            :key="item.nombre" :item="item" v-on:click="showUsers(item)">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.data.nombre" :item="item"></v-list-item-title>
                         <v-row>
                             <v-col cols="4" md="12" sm="12">
                                 <v-list-item-subtitle v-text="' Coordinador: '+item.data.coordinador + ' - Maximo de Usuarios: ' + item.data.numeroMaximoUsuarios "></v-list-item-subtitle>
                             </v-col>
                        </v-row>
                        <v-row>
                             <v-col cols="4" md="12" sm="12">
                                 <v-list-item-subtitle v-text="'Ubicación: ' + item.data.ubicacion + ' - Activa: ' + item.data.activa"></v-list-item-subtitle>
                             </v-col>
                        </v-row>
                    </v-list-item-content>
                    <v-list-item-action >
                        <v-btn @click="showUsers()" text> Ver usuarios</v-btn>
                        <v-btn @click="goToEditDependency()" text> Editar </v-btn>
                        <v-btn @click.stop="deleteDependency(item)" text> Eliminar </v-btn>
                    </v-list-item-action> 
                 </v-list-item>
            <v-divider></v-divider>
            </v-list>
            <v-btn @click="goToRegisterD()" > Agregar dependencia</v-btn>
        </v-card>
        </v-col>
        <v-col>
        <v-card max-width="800" class="mx-auto">
            <v-list subheader>
                <v-subheader>Usuarios de la dependencia seleccionada</v-subheader>
                <v-list-item elevation v-for="item1 in this.itemsUsers" 
                            :key="item1.names">
                    <v-list-item-content>
                        <v-list-item-title v-text="item1.names+ item1.lastnames" ></v-list-item-title>
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
      eliminado: false,
      items: [],
      itemsUsers: [],
      depenItems: [],
      useritems: [],
    };
  },
created(){
    this.datosDependencia();

},
methods: {
    goToRegisterD(){
        this.$router.push("/registerD");
    },
    goToEditDependency(){
        this.$router.push("/editDependecy");
    },
    deleteDependency(item){      
        fb.dependenciesCollection.doc(item.id).delete().then(() => {
            this.eliminado = true;
            this.datosDependencia()
            setTimeout(() => {
                this.eliminado= false;
            }, 2500);
        })
    },
    showUsers: function(item) {
     
        let itemsUsers= []
        let useritems = [];

        fb.usersCollection.where("dependencies", "array-contains", item.data.nombre).get().then( async querySnapshot => {
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
    async datosDependencia() {
      let items = [];
      let depenItems = [];
      fb.dependenciesCollection.get().then(async querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = doc.data();
          const id = doc.id;
          const item = { data, id };
          this.items.push(item);
        });
        depenItems = await items.map(function(dep) {
          depenItems.push(dep.nombre);
        });
      });
      this.items = depenItems;

    }
},

}
</script>

<style>

</style>