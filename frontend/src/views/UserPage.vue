<template>
  <v-container>
    <v-row class="info">
      <v-col md="8">
        <Calendar :books="books"></Calendar>
      </v-col>
      <v-col md="3" offset-md="1">
        <Progress />
      </v-col>
    </v-row>
    <h3>{{ nickname }}님이 평가한 책</h3>
    <Bookshelf :books="books" />
  </v-container>
</template>

<script>
import Bookshelf from "@/components/library/Bookshelf.vue";
// import BookHover from "@/components/library/BookHover.vue";
import Progress from "@/components/library/Progress.vue";
import Calendar from "@/components/library/Calendar.vue";
import axios from "axios";

export default {
  name: "UserPage",
  data() {
    return {
      books: [],
      nickname: "",
    };
  },
  components: {
    Bookshelf,
    Progress,
    Calendar,
  },
  methods: {
    getAccountInfo() {
      const email = localStorage.getItem("email");
      this.nickname = localStorage.getItem("nickname");
      axios
        .get(`https://j4b206.p.ssafy.io/api/account/${email}`)
        .then((res) => {
          var data = JSON.parse(res.data.data);
          this.books = data;
          // var t_date = new Date(this.books[0].createDate);

          console.log(this.books);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getAccountInfo();
  },
};
</script>

<style scoped>
.info {
  margin: 30px 0;
}

.container {
  max-width: 1200px;
}
</style>
