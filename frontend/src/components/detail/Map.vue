<template>
  <div id="map">
    <div class="map"></div>
  </div>
</template>

<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=96d25cdceea12f75a73fe83bd3348112"
></script>
<script>
// import axios from "axios";
export default {
  name: "Map",
  props: {
    detailBookInfo: Object,
  },
  data() {
    return { testdetailBookInfo: null, marketInfo: null };
  },
  watch: {
    detailBookInfo: {
      deep: true,
      handler(newData) {
        this.marketInfo = this.detailBookInfo;
        this.initMap();
      },
    },
  },
  mounted() {
    // const config = this.setToken();
    // var isbn = this.$route.query.isbn;
    // axios
    //   .get(`http://localhost:8080/api/book/${isbn}`, config)
    //   .then((res) => {
    //     console.log("성공");
    //     this.detailBookInfo = res.data.object;
    //     console.log(this.detailBookInfo);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // if (this.detailBookInfo != null) {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=96d25cdceea12f75a73fe83bd3348112";
      document.head.appendChild(script);
    }
    // }
  },
  methods: {
    setToken() {
      const token = localStorage.getItem("jwt");
      const config = {
        headers: {
          Authorization: token,
        },
      };
      return config;
    },
    initMap() {
      // 지도 생성
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(36.3457153, 127.3021026),
        level: 2,
      };
      var map = new kakao.maps.Map(container, options);

      // 마커 생성
      var imageSrc = require("@/assets/images/lettuce.png"); // 마커 이미지
      var imageSize = new kakao.maps.Size(42, 56); // 마커 이미지 크기
      var imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커 좌표와 일치시킬 이미지 안에서의 좌표 설정
      var markerImage = new kakao.maps.MarkerImage( // 마커 이미지 생성
        imageSrc,
        imageSize,
        imageOption
      );
      console.log("Map.vue===================");
      console.log(this.detailBookInfo.market);
      var markerPositions = this.detailBookInfo.market;

      markerPositions.forEach((pos) => {
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(pos.lat, pos.lng),
          image: markerImage, // 마커이미지 설정
          clickable: true, // 마커 클릭 시 지도의 클릭이벤트가 발생하지 않도록 설정
        });
      });
    },
  },
};
</script>

<style scoped>
.map {
  width: 500px;
  height: 400px;
}
</style>
