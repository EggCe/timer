<template>
  <v-container>
    <v-layout fluidtext-left>
      <v-flex>
        <h1>Programm 1 - 7/3</h1>
        <br />
        <p>Vorlauf: 7sec, Programm: 3sec, Nachlauf: 7sec, Wiederholungen: 5</p>

        <v-btn class="timer_button">STARTEN</v-btn>
        <v-btn class="timer_button">STOP</v-btn>
        <v-btn class="timer_button">STELLEN</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>
<style scoped>
.timer_button {
  color: #fefefe !important;
  padding: 50px !important;
  margin: 10px !important;
  background-color: #002b00 !important;
}
.timer_button:hover {
  background-color: #fefefe !important;
  padding: 50px !important;
  margin: 10px !important;
}
</style>