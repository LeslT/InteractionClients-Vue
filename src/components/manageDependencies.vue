<template>
    <v-container >
        <v-alert v-if="eliminado === true" type="success">Se eliminó la dependencia.</v-alert>
        <v-alert v-if="noEliminar === true" type="error">Esta dependecia no se puede eliminar porque contiene usuarios asociados.</v-alert>
         <v-row justify="center">
      <v-col cols="1" md="4" sm="3">
        <h1>{{title}}</h1>
      </v-col>
    </v-row>
        <v-row >
            <v-col>
        <v-card max-width="800"  id="scroll-target"
      style="max-height: 400px"
      class="overflow-y-auto">
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
                        <v-btn @click="goToEditDependency(item)" text> Editar </v-btn>
                        <v-btn @click.stop="deleteDependency(item)" text> Eliminar </v-btn>
                    </v-list-item-action> 
                 </v-list-item>
            <v-divider></v-divider>
            </v-list> 
        </v-card>
        <v-btn @click="goToRegisterD()" > Agregar dependencia</v-btn>
        </v-col>
        <v-col>
        <v-card max-width="800" id="scroll-target"
      style="max-height: 400px"
      class="overflow-y-auto">
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
         <div v-if="!this.activoEdit">
        <v-card max-width="400" class="mx-auto">
            <v-subheader>Editar</v-subheader>
                <div class="registerContent">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row justify="center">
                <v-col cols="1" md="6" sm="2">
                  <input type="text" v-model="actualDep.data.nombre" :rules="nameRules" required>
                </v-col>
              </v-row>
            </v-form>
            <v-row justify="center">
              <v-col cols="1" md="6" sm="2">
                <input v-model="actualDep.data.coordinador" :rules="nameRules" required>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="1" md="6" sm="2">
                <input
                  v-model="actualDep.data.numeroMaximoUsuarios"
                  required
                  type="number"
                  min="1"
                >
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="1" md="6" sm="2">
                <input v-model="actualDep.data.ubicacion" :rules="nameRules" required>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="1" md="3" sm="1">
                <p>
                  <v-checkbox
                    v-model="actualDep.data.activa"
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
                  v-on:click="editEvent(actualDep)"
                >Aceptar</v-btn>
              </v-col>
              <v-col cols="2" md="3" sm="1">
                <v-btn
                  :disabled="disabledButtonRegister"
                  style="margin:5px;background:#08799C"
                  @click="cancelEdit()" 
                >Cancelar</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card>
         </div>
    </v-container>
</template>
<script>
import { mapState } from "vuex";
const fb = require("../../firebaseConfig");

export default {

 data: function() {
    return {
      title: "Gestión de dependencias",
      eliminado: false,
      noEliminar: false,
      items: [],
      itemsUsers: [],
      depenItems: [],
      useritems: [],
      activoEdit: true,
      actualDep: Object
    };
  },
created(){
    this.datosDependencia();
},
methods: {
    cancelEdit(){
        this.activoEdit = true;
    },
    editEvent: function(actualDep){
        fb.dependenciesCollection.doc(actualDep.id).set({nombre: actualDep.data.nombre, coordinador: actualDep.data.coordinador, activa: actualDep.data.activa, numeroMaximoUsuarios: actualDep.data.numeroMaximoUsuarios, ubicacion: actualDep.data.ubicacion})
        this.activoEdit = true;
    },
    goToRegisterD(){
        this.$router.push("/registerD");
    },
    goToEditDependency(item){
        this.activoEdit = false;
        this.actualDep = item;
    },
    deleteDependency(item){
    let useritems = [];
    fb.usersCollection.where("dependencies", "array-contains", item.data.nombre).get().then(async querySnapshot => {
        await querySnapshot.forEach(doc => {
            useritems.push(doc.data())
        });        
        if (useritems.length == 0) {
            fb.dependenciesCollection.doc(item.id).delete().then(() => {
                this.eliminado = true;
                this.datosDependencia()
                setTimeout(() => {
                    this.eliminado = false;
                }, 2500);
            })
        }else{
          this.noEliminar = true;
            setTimeout(() => {
                    this.noEliminar = false;
                }, 2500);
        }
    });

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