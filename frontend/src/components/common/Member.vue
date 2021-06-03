<template>
  <v-dialog max-width="500" transition="dialog-top-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-avatar
        v-bind="attrs"
        v-on="on"
        class="my-profile"
        color="green"
        size="35px"
      >
        <v-icon dark size="32px"> mdi-account-circle </v-icon>
      </v-avatar>
    </template>
    <template v-slot:default="dialog">
      <v-card class="profile">
        <v-row align="center" justify="center">
          <v-col align="center">
            <v-toolbar color="#206844" dark>
              <v-btn @click="myinfo">회원정보수정</v-btn>
            </v-toolbar>
            <v-toolbar color="#206844" dark>
              <v-btn @click="logout">로그아웃</v-btn>
            </v-toolbar>
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "Member",
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("nickname");
      this.$router.push({ name: "Home" });
      location.reload();
    },
    myinfo() {
      this.$router.push({ name: "MyInfo" });
      location.reload();
    },
  },
};
</script>

<style scoped>
.content {
  width: 400px;
  position: absolute;
  top: 0;
  right: 0;
}

.profile {
  position: absolute;
  top: 50px;
  right: 0;
  width: 400px;
}
</style>
