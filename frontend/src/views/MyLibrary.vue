<template>
  <v-container>
    <v-row class="info">
      <v-col md="8">
        <v-calendar></v-calendar>
      </v-col>
      <v-col md="3" offset-md="1">
        <Progress />
      </v-col>
    </v-row>
    <h3>책벌레님이 읽고 싶은 책</h3>
    <Bookshelf />
    <h3>책벌레님이 읽고 있는 책</h3>
    <Bookshelf />
    <h3>책벌레님이 읽은 책</h3>
    <Bookshelf />
  </v-container>
</template>

<script>
import Bookshelf from "@/components/library/Bookshelf.vue";
import Progress from "@/components/library/Progress.vue";
export default {
  name: "MyLibrary",
  components: {
    Bookshelf,
    Progress,
  },
};
</script>

<style>
.info {
  margin: 30px 0;
}

.container {
  max-width: 1200px;
}
</style>
