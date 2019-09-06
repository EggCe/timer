<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped left>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="programm in programms" :key="programm.id" @click="setView(programm.id)">
          <v-list-item-icon>
            <v-icon>{{ programm.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ programm.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Kgl. priv. Schützengilde Straubing</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <HelloWorld v-if="page == 1" />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    programms: [
      { title: "7/3", icon: "arrow-right-bold", id: 1 },
      { title: "15", icon: "arrow-right-bold", id: 2 },
      { title: "10/5", icon: "arrow-right-bold", id: 3 }
    ],
    drawer: null,
    page: 0
  }),
  methods: {
    setView(id) {
      this.page = id;
    }
  }
};
</script>
