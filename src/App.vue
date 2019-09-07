<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped left>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <img height="150px" src="./assets/wappen.jpg" />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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

    <v-app-bar class="top_bar" app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Kgl. priv. Schützengilde Straubing</v-toolbar-title>
    </v-app-bar>
    <v-content class="main_content">
      <Homepage v-if="page == 0" />
      <program1 v-if="page == 1" />
      <program2 v-if="page == 2" />
      <program3 v-if="page == 3" />
      <program4 v-if="page == 4" />
      <program5 v-if="page == 5" />
      <program6 v-if="page == 6" />
      <program7 v-if="page == 7" />
      <program8 v-if="page == 8" />
      <program9 v-if="page == 9" />
      <programCustom v-if="page==10" />
    </v-content>
  </v-app>
</template>

<script>
import Homepage from "./components/Homepage";
import program1 from "./components/program1";
import program2 from "./components/program2";
import program3 from "./components/program3";
import program4 from "./components/program4";
import program5 from "./components/program5";
import program6 from "./components/program6";
import program7 from "./components/program7";
import program8 from "./components/program8";
import program9 from "./components/program9";
import programCustom from "./components/programCustom";

export default {
  name: "App",
  components: {
    Homepage,
    program1,
    program2,
    program3,
    program4,
    program5,
    program6,
    program7,
    program8,
    program9,
    programCustom
  },
  data: () => ({
    programms: [
      { title: "Startseite", icon: "home", id: 0 },
      { title: "Programm 1 7/3", icon: "mdi-arrow-right", id: 1 },
      { title: "Programm 2 7/3", icon: "mdi-arrow-right", id: 2 },
      { title: "Programm 3 7/3", icon: "mdi-arrow-right", id: 3 },
      { title: "Programm 4 7/3", icon: "mdi-arrow-right", id: 4 },
      { title: "Programm 5 7/3", icon: "mdi-arrow-right", id: 5 },
      { title: "Programm 6 7/3", icon: "mdi-arrow-right", id: 6 },
      { title: "Programm 7 7/3", icon: "mdi-arrow-right", id: 7 },
      { title: "Programm 8 7/3", icon: "mdi-arrow-right", id: 8 },
      { title: "Programm 9 7/3", icon: "mdi-arrow-right", id: 9 },
      { title: "Eigenes Programm", icon: "mdi-arrow-right", id: 10 }
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
<style>
.main_content {
  background-color: #fffae8;
}
.top_bar {
  background-color: #002b00 !important;
  color: #fefefe !important;
}
.v-toolbar__title {
  font-size: 25px !important;
}
.mdi-menu {
  color: #fefefe !important;
}
.v-navigation-drawer {
  background-color: #fefefe !important;
}
.v-navigation-drawer img {
  margin-left: 50px;
}
.timer-button {
  color: #fefefe !important;
  padding: 20px;
}
</style>