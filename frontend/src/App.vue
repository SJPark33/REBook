<template>
  <div id="app">
    <Navbar v-if="isNavbar" />
    <!-- <unloginNavbar v-else /> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar.vue";
import constants from "./lib/constants";
// import UnloginNavbar from "@/components/common/unloginNavbar.vue";

export default {
  name: "App",
  data: function () {
    return {
      constants,
      isNavbar: true,
    };
  },
  components: {
    Navbar,
    // UnloginNavbar,
  },

  created() {
    let url = this.$route.name;
    this.checkUrl(url);
  },
  watch: {
    $route(to) {
      this.checkUrl(to.name);
    },
  },
  methods: {
    checkUrl(url) {
      let array = [
        constants.URL_TYPE.USER.LOGIN,
        constants.URL_TYPE.USER.SIGNUP,
        constants.URL_TYPE.ABOUT.ABOUT,
        constants.URL_TYPE.USER.PREFERENCE,
      ];
      let isNavbar = true;
      array.map((path) => {
        if (url === path) isNavbar = false;
      });
      this.isNavbar = isNavbar;
      console.log(isNavbar);
    },
  },
};
</script>
<style scoped>
.v-application--wrap {
  min-height: 0px !important;
}
</style>
