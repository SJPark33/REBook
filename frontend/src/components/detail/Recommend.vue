<template>
  <div>
    <h3 class="r-title">이런 책은 어떠세요?</h3>
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide v-for="i in 4" :key="i" :title="i.toString()" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Recommend",
  props: {
    detailBookInfo: Object,
  },
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          title: "Slide #1",
          content: "Slide content.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.r-title {
  font-size: 30px;
}
</style>
