<template>
  <div id="app" style="margin-top: 5vh">
    <v-app style="height: 400px">
      <v-card class="e4">
        <v-responsive
          :style="{ background: `rgb(${red}, ${green}, ${blue})` }"
          height="550px"
        >
          <div
            style="
              border: 3px solid black;
              text-align: center;
              height: 100px;
              line-height: 100px;
            "
          >
            박성준님을 위한 책추천
          </div>
        </v-responsive>
      </v-card>
    </v-app>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      red: 64,
      green: 128,
      blue: 0,
    };
  },
};
</script>

<style scoped></style>
