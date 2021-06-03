<template>
  <div class="container">
    <MarketMap />
  </div>
</template>

<script>
import MarketMap from "@/components/detail/MarketMap.vue";
export default {
  components: { MarketMap },
  data() {
    return {
      sellInfo: [],
    };
  },
  methods: {
    getSellInfo(info) {
      console.log("=========================");
      console.log(info);
      this.sellInfo = info;
    },
  },
};
</script>

<style scoped>
/* .container {
  display: flex;
  flex-direction: row;
} */
</style>
