<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Login from './pages/Login';

export default {
  name: 'App',
  components: {
    Login
  },
  data: () => ({

  }),
};
</script>
