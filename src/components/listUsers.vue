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
                <v-btn>Buscar</v-btn>
                <v-btn to="/register">Añadir</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>