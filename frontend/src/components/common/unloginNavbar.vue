<template>
  <nav class="local-nav" style="position: relative">
    <div class="local-nav-links">
      <img src="@/assets/images/logo.png" style="height: 110px" />
      <div class="btn-login" style="">
        <v-app style="height: 85px !important">
          <v-btn
            depressed
            style="height: 50px; width: 80px !important; margin-right: 80px"
            height="100"
            @click="$router.push('/login')"
          >
            LOGIN
          </v-btn>
        </v-app>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
.btn-login {
  float: right;
  margin-top: 30px;
}
</style>
