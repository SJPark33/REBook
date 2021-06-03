<template>
  <div>
    <vue-scroll-snap :fullscreen="true">
      <div class="about-header" style="z-index: 2000">
        <img
          src="@/assets/images/REBOOK-removebg.png"
          class="about-logo"
          @click="$router.push('/')"
        />
        <div style="height: 100%">
          <v-btn
            class="about-header-button"
            depressed
            @click="$router.push('/login')"
          >
            LOGIN
          </v-btn>
        </div>
      </div>
      <div class="item" id="one"><Rebook /></div>
      <!-- <div class="item" id="two"></div> -->
      <div class="item" id="three" style="width: 100vw; height: 100vh">
        <!-- <div class="introduce-text"></div> -->
        <Introduce style="" />
      </div>
      <!-- <div class="item" id="four"></div> -->
    </vue-scroll-snap>
  </div>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import Introduce from "./Introduce.vue";
import Rebook from "@/components/main/Rebook.vue";
export default {
  name: "FullscreenVertical",
  components: { VueScrollSnap, Introduce, Rebook },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>
<style scoped>
.about-header {
  position: fixed;
  height: 8%;
  width: 99%;
  background-color: rgba(0, 0, 0, 0.267);
}
.about-logo {
  position: absolute;
  height: 100%;
}
.about-header-button {
  height: 100%;
  margin-top: 0.8%;
  position: absolute;
  margin-left: 92% !important;
  background-color: rgb(80, 80, 80) !important;
  color: white !important;
}
.about-header-button:hover {
  background-color: rgb(138, 134, 134);
}
#one {
  background: #adccb1;
}

#two {
  background: #dbd1ae;
}

#three {
  background: #e2dfde;
}

/* #four {
  background: #ffffff;
}

#five {
  background: black;
} */
</style>
