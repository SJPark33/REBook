<template>
  <div>
    <div class="o-header">
      <h3 class="o-title">양상추마켓에서 찾아보기</h3>
      <div class="btn-box" @click="$emit('open-Mmodal')">
        <Button :title="title" />
      </div>
    </div>
    <Map :detailBookInfo="detailBookInfo" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import Map from "./Map.vue";
export default {
  name: "OneBookMarket",
  components: {
    Button,
    Map,
  },
  props: {
    detailBookInfo: Object,
  },
  data() {
    return {
      title: "+ 양상추마켓에 등록하기",
    };
  },
  methods: {
    openModal: function () {
      this.$emit("open-Mmodal");
    },
  },
};
</script>

<style scoped>
.o-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}
.o-title {
  font-size: 30px;
}
</style>
