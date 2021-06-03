<template>
  <div class="home">
    <!-- <ImageSlider /> -->
    <Carousel />
    <Genre3 />
    <Genre2 />
    <Genre1 />
  </div>
</template>

<script>
// import ImageSlider from "@/components/home/ImageSlider";
import Carousel from "@/components/home/Carousel";
import Genre1 from "@/components/home/Genre1";
import Genre2 from "@/components/home/Genre2";
import Genre3 from "@/components/home/Genre3";
export default {
  name: "Home",
  components: {
    // ImageSlider,
    Carousel,
    Genre1,
    Genre2,
    Genre3,
  },
};
</script>
