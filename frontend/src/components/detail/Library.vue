<template>
  <div>
    <h3 class="l-title">해당도서가 있는 도서관</h3>
    <v-data-table
      :headers="headers"
      :items="librarys"
      hide-default-header
      hide-default-footer
      class="elevation-1"
    >
      <!-- <template v-slot:item.action="{ item }">
        <v-btn color="success">Create</v-btn>
      </template> -->
    </v-data-table>
    <!-- <ul
      class="l-items"
      v-for="(library, index) in dummy.librarys"
      v-bind:key="index"
    >
      <li class="l-item">
        <div class="item">
          {{ library.library }}
          <div class="item-green">{{ library.stock }}권 보유 중</div>
          {{ library.telephone }}
          {{ library.address }}
          <button>지도에서 보기</button>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "Library",
  props: {
    dummy: Object,
  },
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          value: "name",
        },
        { text: "Library", value: "library" },
        { text: "Stock", value: "stock" },
        { text: "Tel", value: "telephone" },
        { text: "Address", value: "address" },
        { text: "Map", value: "map" },
        // { text: "Iron (%)", value: "iron" },
      ],
      librarys: this.dummy.librarys,
      // desserts: [
      //   {
      //     name: "Jelly bean",
      //     calories: 375,
      //     fat: 0.0,
      //     carbs: 94,
      //     protein: 0.0,
      //     iron: "0%",
      //   },
      //   {
      //     name: "Lollipop",
      //     calories: 392,
      //     fat: 0.2,
      //     carbs: 98,
      //     protein: 0,
      //     iron: "2%",
      //   },
      //   {
      //     name: "Honeycomb",
      //     calories: 408,
      //     fat: 3.2,
      //     carbs: 87,
      //     protein: 6.5,
      //     iron: "45%",
      //   },
      //   {
      //     name: "Donut",
      //     calories: 452,
      //     fat: 25.0,
      //     carbs: 51,
      //     protein: 4.9,
      //     iron: "22%",
      //   },
      // ],
    };
  },
};
</script>

<style scoped>
.l-title {
  font-size: 30px;
}
.l-items {
  width: 100%;
  list-style: none;
  font-size: 20px;
  background-color: rgb(238, 236, 236);
}
.l-item {
  width: 100%;
  height: 2rem;
}
.item {
  display: flex;
  justify-content: space-around;
}
.item-green {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: green;
}
</style>
