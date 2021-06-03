<template>
  <div id="map">
    <!-- <MarketInfo :sellInfo="sellInfo" :test="test" /> -->
    <div class="sidebar" v-if="sellInfo">
      <div class="infoList" id="infoList">
        <!-- <img id="infoImg" src="" alt="책표지" />
        <li id="info">양배추를 클릭해보세요</li> -->
      </div>
      <!-- <ul v-for="(info, index) in sellinfo" v-bind:key="index">
        <li>{{ info.title }}</li>
      </ul> -->
    </div>
    <div class="map"></div>
  </div>
</template>

<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=96d25cdceea12f75a73fe83bd3348112"
></script>
<script>
// import MarketInfo from "./MarketInfo.vue";
export default {
  name: "MarketMap",
  data() {
    return {
      sellInfo: ["없어요"],
      bookLists: [],
      bookImgPath:
        "http://image.yes24.com/momo/TopCate3247/MidCate002/305041342.jpg",
      dummy: {
        lat: 36.3457153,
        lng: 127.3021026,
        sellingInfo: [
          {
            sellerId: 1,
            nickname: "박성준",

            books: [
              {
                isbn: 9788901249872,
                bookImgPath:
                  "http://image.yes24.com/momo/TopCate3247/MidCate002/305041342.jpg",
                title: "금욜",
                price: 13500,
                status: 0,
                desc: "한 번도 안 본 새 책입니다.",
              },
              {
                isbn: 9788901249872,
                bookImgPath:
                  "http://image.yes24.com/momo/TopCate3247/MidCate002/305041342.jpg",
                title: "2이거무슨책이지2",
                price: 13500,
                status: 0,
                desc: "2한 번도 안 본 새 책입니다.2",
              },
            ],
          },
          {
            sellerId: 2,
            nickname: "서범석",
            lat: 36.3457153,
            lng: 127.3031023,
            books: [
              {
                isbn: 9788901249872,
                bookImgPath:
                  "http://image.yes24.com/momo/TopCate3247/MidCate002/305041342.jpg",
                title: "화이팅",
                price: 13500,
                status: 0,
                desc: "3한 번도 안 본 새 책입니다.3",
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
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
  },
  methods: {
    initMap() {
      // 지도 생성
      let _this = this;
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(36.3457153, 127.3021026),
        level: 2,
      };

      var map = new kakao.maps.Map(container, options);

      // 마커 생성
      var imageSrc = require("@/assets/images/lettuce.png"); // 마커 이미지 주소
      var imageSize = new kakao.maps.Size(64, 85); // 마커 이미지 크기
      var bigImageSize = new kakao.maps.Size(70, 93);
      var imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지 옵션, 마커 좌표와 일치시킬 이미지 안에서의 좌표 설정
      var markerImage = new kakao.maps.MarkerImage( // 마커 이미지 생성
        imageSrc,
        imageSize,
        imageOption
      );
      var bigMarkerImage = new kakao.maps.MarkerImage(
        imageSrc,
        bigImageSize,
        imageOption
      );

      var markerPositions = this.dummy.sellingInfo;

      // 지도에 마커 표시
      markerPositions.forEach((pos) => {
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(pos.lat, pos.lng),
          image: markerImage, // 마커이미지 설정
          clickable: true, // 마커 클릭 시 지도의 클릭이벤트가 발생하지 않도록 설정
        });

        // 마커에 이벤트 등록

        // mouseover
        kakao.maps.event.addListener(marker, "mouseover", function () {
          marker.setImage(bigMarkerImage);
        });

        // mouseout
        kakao.maps.event.addListener(marker, "mouseout", function () {
          // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
          // 마커의 이미지를 기본 이미지로 변경합니다
          marker.setImage(markerImage);
        });
        // click
        kakao.maps.event.addListener(
          marker,
          "click",
          // (this.sellingInfo = pos.books)
          sendSellInfo(pos.books)
          // this.$emit("info", pos.books)
        );
      });
      function sendSellInfo(info) {
        return function () {
          console.log("sellsendSellInfoInfo");
          // this.sendSellInfo(info);
          // this.$store.dispatch("click_market", info);
          var infoList = document.getElementById("infoList");
          while (infoList.firstChild) {
            infoList.removeChild(infoList.firstChild);
          }
          for (var i = 0; i < info.length; i++) {
            var img = document.createElement("img");
            img.style.width = "300px";
            img.style.height = "400px";
            img.id = "infoItem";
            img.setAttribute("class", "infoImg");
            img.src = info[i].bookImgPath;
            var title = document.createElement("div");
            title.setAttribute("id", "infoItem");
            title.textContent = info[i].title;
            infoList.appendChild(img);
            infoList.appendChild(title);
          }
          // var sellInfo = document.getElementById("info");
          // sellInfo.innerHTML = info[0].title;
          // var infoImg = document.getElementById("infoImg");
          // infoImg.src = info[0].bookImgPath;
          // this.sellInfo = info; // 이게 data의 sellInfo로 인식못하는듯
          // this.test = "클릭한 테스트";
          // console.log(this.sellInfo);
        };
      }
      // 인포윈도우 열고 닫기
      // function getBookList(map, marker, infowindow) {
      //   return function () {
      //     infowindow.open(map, marker);
      //   };
      // }
    },
    // sendSellInfo: function (info) {
    //   this.$emit("info", info);
    // },
  },
};
</script>

<style scoped>
/* html,
body {
  width: 100%;
  height: 100%;
}

#map {
  width: 80%;
  height: 80%;
} */
#map {
  width: 1920px;
  height: 1200px;
  display: flex;
  justify-content: space-between;
}
.sidebar {
  width: 500px;
  z-index: 3;
  background-color: white;
}
#infoImg {
  width: 300px;
  height: 400px;
  margin-left: 0;
  background-color: red;
}
</style>
