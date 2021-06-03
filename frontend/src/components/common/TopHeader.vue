<template>
  <div class="nav">
    <v-app id="header" style="height: 240px">
      <div class="top-header">
        <div class="logo" @click="toHome">
          <img src="@/assets/images/logo.png" style="height: 110px" />
        </div>
        <div class="hello-user-container">
          <div class="hello-user">박성준님 환영합니다.</div>
        </div>
        <div class="profile-container" style="margin-left: 30px">
          <v-avatar
            class="my-profile"
            color="green"
            size="50px"
            @click="toMyInfo"
          >
            <v-icon dark size="48px"> mdi-account-circle </v-icon>
          </v-avatar>
        </div>
      </div>
    </v-app>
  </div>
</template>
