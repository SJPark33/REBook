<template>
  <div @mouseover="startRebook" @mouseout="endRebook">
    <div>
      <div class="logo-container">
        <img src="@/assets/images/REBOOK.png" alt="" class="intro-logo" />
      </div>
    </div>
    <div class="text-container">
      <div style="margin-bottom: 5vh">책을 Recommend,</div>
      <div style="margin-bottom: 5vh">책을 Read,</div>
      <div style="margin-bottom: 5vh">책을 Resell..</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checklogo: 0,
    };
  },
  methods: {
    startRebook() {
      this.checklogo = 1;
    },
  },
};
</script>
<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.logo-container {
  position: absolute;
  /* background-color: red; */
  width: 30vw;
  height: 35vh;
  top: 30vh;
  left: 15vw;
  animation: fadein 1s;
}
.text-container {
  position: absolute;
  top: 30vh;
  width: 30vw;
  height: 35vh;
  left: 55vw;
  font-size: 50px;
  animation: fadein 3s;
}
.intro-logo {
  width: 100%;
  height: 100%;
}
</style>
