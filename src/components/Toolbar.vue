<template>
  <div class="toolbar">
    <v-toolbar app dark color="#191C21" dense>
      <router-link to="/">
        <img src="../assets/logo.svg" style="height:50px;" />
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
        style="color:#D8DADE;"
      ></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat class="button" to="/search/accommodations">
          <h3 class="desktop">Integration</h3>
        </v-btn>
        <v-btn flat class="button" to="/search/events">
          <h3 class="desktop">Client</h3>
        </v-btn>
        <v-btn flat class="button" to="/search/experiences">
          <h3 class="desktop">Blog</h3>
        </v-btn>
        <v-btn flat class="button" to="/search/food">
          <h3 class="desktop">Career</h3>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      dark
      style="box-shadow: 0px 1px 0px #121416; position:fixed; background:#191C21;"
      class="hidden-md-and-up"
      temporary
      v-model="drawer"
    >
      <v-layout text-xs-left column wrap class="mt-5">
        <v-flex xs12>
          <v-btn flat block to="/search/accommodations" class="mt-2 button">
            <h3>Integration</h3>
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn flat block to="/search/events" class="mt-2 button">
            <h3>Client</h3>
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn flat block to="/search/experiences" class="mt-2 button">
            <h3>Blog</h3>
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn flat block to="/search/food" class="mt-2 button">
            <h3>Career</h3>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped>
.toolbar {
  height: 48px;
}
/* button:active { 
  background-color: #ffdb3a;
  transition: background 1s ease-out;
  } */
.desktop {
  font-size: 16px;
  line-height: 22px;
  color: #d8dade;
}
.button {
  color: #d8dade;
  text-transform: capitalize;
}
</style>
