<template>
    <v-container>
        <v-card max-width="600" class="mx-auto">
            <v-list subheader>
                <v-subheader>Dependecias</v-subheader>
                <v-list-item v-for="item in items" :key="item.title" @click="editDependecy()">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
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
export default {
 data: () => ({
      items: [
        { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
    }),
methods: {
    goToRegisterD(){
        this.$router.push("/registerD");
    },
    goToEditDependency(){
        this.$router.push("/editDependecy");
    },
    deleteDependency(){

    }
}
}
</script>

<style>

</style>