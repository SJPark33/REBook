<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            오늘
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}의 책 달력
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>일</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>주</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>월</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4일간</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          class="calendar"
          ref="calendar"
          v-model="focus"
          color="#4CAF4F"
          locale="ko"
          :events="events"
          :event-color="getEventColor"
          :event-text-color="getEventTextColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <!-- 이벤트 선택시 모달 -->
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Calendar",
  props: {
    books: Array,
  },
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "월",
      week: "주",
      day: "일",
      "4day": "4일간",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    // books: [
    //   {
    //     name: "회복탄력성",
    //     start: new Date("2021-04-01 09:00:00 GMT+0900"),
    //     end: new Date("2021-04-04 19:00:00 GMT+0900"),
    //     color: "#173F5F",
    //   },
    //   {
    //     name: "자기관리론",
    //     start: new Date("2021-04-03 09:00:00 GMT+0900"),
    //     end: new Date("2021-04-06 22:00:00 GMT+0900"),
    //     color: "#124933",
    //   },
    //   {
    //     name: "저 청소일 하는데요?",
    //     start: new Date("2021-04-06 09:00:00 GMT+0900"),
    //     end: new Date("2021-04-09 09:00:00 GMT+0900"),
    //     color: "#ac3300",
    //   },
    // ],
    nickname: "",
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    getEventTextColor(event) {
      console.log(event);
      return "#ffffff";
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange() {
      // date 셋팅
      const events = [];
      const eventCount = this.books.length;

      for (let i = 0; i < eventCount; i++) {
        events.push({
          name: this.books[i].book.title,
          start: new Date(this.books[i].createDate),
          end: new Date(this.books[i].updateDate),
        });
      }

      this.events = events;
    },
  },
};
</script>

<style scoped>
.calendar {
  max-height: 500px;
}
</style>
