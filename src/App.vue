


<template>
  <v-app class="rounded rounded-md">
    <v-app-bar flat class="px-5">
      <v-avatar
        color="grey-darken-1"
        size="32"
      >:)</v-avatar>
      <v-divider vertical class="mx-5"></v-divider>
      <v-tabs>
        <v-tab v-for="(link, i) in links" :key="i" :to="link.route"> {{link.title}}</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="align-center h-screen">
      <v-container class="d-flex">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {'title':'Home', 'route':'/'},
        {'title':'About', 'route':'/about'},
      ],
    }),
  }
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
