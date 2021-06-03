<template>
  <v-btn @click="$emit('open-modal')" class="ma-2">{{ title }}</v-btn>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.ma-2 {
  outline: none;
  box-shadow: 0 0 0 1px black;
  width: 100%;
  height: 100%;
}
.theme--light.v-btn.v-btn--has-bg {
  background-color: white;
}
.v-btn__content {
  font-size: 20px;
  font-weight: bold;
}
</style>
