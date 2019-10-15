<template>
    <v-container>
        <v-card max-width="800" class="mx-auto">
            <v-list subheader>
                <v-subheader>Dependecias</v-subheader>
                <v-list-item  v-for="item in this.items" 
                            :key="item.coordinador" @click="editDependecy()">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.nombre" ></v-list-item-title>
                         <v-row>
                             <v-col cols="4" md="12" sm="12">
                                 <v-list-item-subtitle v-text="' Coordinador: '+item.coordinador + ' - Maximo de Usuarios: ' + item.numeroMaximoUsuarios "></v-list-item-subtitle>
                             </v-col>
                        </v-row>
                        <v-row>
                             <v-col cols="4" md="12" sm="12">
                                 <v-list-item-subtitle v-text="'Ubicación: ' + item.ubicacion + ' - Activa: ' + item.activa"></v-list-item-subtitle>
                             </v-col>
                        </v-row>
                    </v-list-item-content>
                    <v-list-item-action >
                        <v-btn @click="goToEditDependency()" text> Editar </v-btn>
                        <v-btn @click="deleteDependency()" text> Eliminar </v-btn>
                    </v-list-item-action> 
                 </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-btn @click="goToRegisterD()" > Agregar dependencia</v-btn>
        </v-card>
    </v-container>
</template>
<script>
import { mapState } from "vuex";
import { async } from "q";
const fb = require("../../firebaseConfig");

export default {

 data: function() {
    return {
      items: [],
      depenItems: []
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
    deleteDependency(){
        
    },
    async datosDependencia(){
        let items = []
        let depenItems = [];
        fb.dependenciesCollection.get().then( async querySnapshot => {
            querySnapshot.forEach(doc => {
                this.items.push(doc.data())
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