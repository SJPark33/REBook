<template>
  <div>
    <body>
      <div class="bookshelf_wrapper">
        <ul class="books_list">
          <li class="book_item first"></li>
          <li class="book_item second"></li>
          <li class="book_item third"></li>
          <li class="book_item fourth"></li>
          <li class="book_item fifth"></li>
          <li class="book_item sixth"></li>
        </ul>
        <div class="shelf"></div>
      </div>
      <p class="intro-title">Necessafy 팀원을 소개합니다</p>
      <div class="wrapper">
        <ul class="team">
          <li class="team-item">
            <div class="profile profile_red">
              <img src="../assets/images/SJ.jpeg" />
              <div class="profile-contents">
                <h2>Joon<span>CEO</span></h2>
                <p>정말 성준해~</p>
              </div>
            </div>
          </li>
          <li class="team-item">
            <div class="profile profile_beige">
              <img src="../assets/images/Dony.jpg" />
              <div class="profile-contents">
                <h2>Dony<span>베스킨나이31</span></h2>
                <p>만 30세, 무직</p>
              </div>
            </div>
          </li>
          <li class="team-item">
            <div class="profile profile_green">
              <img src="../assets/images/SBS.jpeg" />
              <div class="profile-contents">
                <h2>SBS<span>Back-end</span></h2>
                <p>신체나이 31세</p>
              </div>
            </div>
          </li>
          <li class="team-item">
            <div class="profile profile_pink">
              <img src="../assets/images/JH.png" />
              <div class="profile-contents">
                <h2>주녁<span>Back-end</span></h2>
                <p>리듬타</p>
              </div>
            </div>
          </li>
          <li class="team-item">
            <div class="profile profile_purple">
              <img src="../assets/images/MJ.jpeg" />
              <div class="profile-contents">
                <h2>Moon<span>Front-end</span></h2>
                <p>Moonrise</p>
              </div>
            </div>
          </li>
          <li class="team-item">
            <div class="profile profile_pink">
              <img src="../assets/images/SM.jpeg" />
              <div class="profile-contents">
                <h2>SumJean<span>Back-end</span></h2>
                <p>막내온탑, 합성수지</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  data() {
    return {
      check_team_intro: 0,
      check_wrapper: 0,
    };
  },
  methods: {
    startcheck3() {
      setTimeout(() => {
        this.check_team_intro = 1;
      }, 500);
      setTimeout(() => {
        this.check_wrapper = 1;
      }, 1000);
    },
    endcheck3() {
      this.check_wrapper = 0;
      this.check_team_intro = 0;
    },
  },
};
</script>

<style scoped>
.intro-title {
  position: relative;
  left: 30%;
  top: 10%;
  font-size: 90px;
  color: #345656;
}

ul,
h2,
p {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

.wrapper {
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
}

.team {
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-item {
  flex-basis: 250px;
  flex-shrink: 0;
  margin: 0 4px;
  opacity: 0.8;
  transition: all 0.4s;
}

.team-item:hover {
  opacity: 1;
  flex-basis: 400px;
  margin: 0 20px;
}

.team-item img {
  width: 100%;
}

.profile {
  background-color: #222;
  position: relative;
  overflow: hidden;
}

.profile:before {
  content: " ";
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.95+100 */
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.95) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.95) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.95) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#f2000000',GradientType=0 ); /* IE6-9 */
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 200px;
}

.profile_red {
  color: #ff4949;
}

.profile_beige {
  color: beige;
}

.profile_green {
  color: darkseagreen;
}

.profile_pink {
  color: pink;
}

.profile_purple {
  color: violet;
}

.profile-contents {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
}

.profile-contents h2 {
  font-size: 17px;
}

.profile-contents h2 span {
  display: block;
  font-size: 24px;
}

.profile-contents p {
  color: white;
  font-size: 20px;
  min-width: 140px;
  max-height: 0;
  overflow: hidden;
  line-height: 1.2;
  transition: all 1s;
  opacity: 0;
}

.team-item:hover .profile-contents p {
  opacity: 1;
  transition-delay: 0.4s;
  max-height: 6em;
  margin-top: 0.4em;
}

body {
  /* background-color: #1929ff; */
  width: 100%;
  height: 100vh;
  margin: 0;
}

.bookshelf_wrapper {
  position: relative;
  top: 20%;
  left: 20%;
  transform: translate(-50%, -50%);
}

.books_list {
  margin: 0 auto;
  width: 300px;
  padding: 0;
}

.book_item {
  position: absolute;
  top: -120px;
  box-sizing: border-box;
  list-style: none;
  width: 40px;
  height: 120px;
  opacity: 0;
  background-color: #345656;
  border: 5px solid white;
  transform-origin: bottom left;
  transform: translateX(300px);
  -webkit-animation: travel 2500ms linear infinite;
  animation: travel 2500ms linear infinite;
}
.book_item.first {
  top: -140px;
  height: 140px;
}
.book_item.first:before,
.book_item.first:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: white;
}
.book_item.first:after {
  top: initial;
  bottom: 10px;
}
.book_item.second:before,
.book_item.second:after,
.book_item.fifth:before,
.book_item.fifth:after {
  box-sizing: border-box;
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 17.5px;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
}
.book_item.second:after,
.book_item.fifth:after {
  top: initial;
  bottom: 10px;
}
.book_item.third:before,
.book_item.third:after {
  box-sizing: border-box;
  content: "";
  position: absolute;
  top: 10px;
  left: 9px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 5px solid white;
}
.book_item.third:after {
  top: initial;
  bottom: 10px;
}
.book_item.fourth {
  top: -130px;
  height: 130px;
}
.book_item.fourth:before {
  box-sizing: border-box;
  content: "";
  position: absolute;
  top: 46px;
  left: 0;
  width: 100%;
  height: 17.5px;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
}
.book_item.fifth {
  top: -100px;
  height: 100px;
}
.book_item.sixth {
  top: -140px;
  height: 140px;
}
.book_item.sixth:before {
  box-sizing: border-box;
  content: "";
  position: absolute;
  bottom: 31px;
  left: 0px;
  width: 100%;
  height: 5px;
  background-color: white;
}
.book_item.sixth:after {
  box-sizing: border-box;
  content: "";
  position: absolute;
  bottom: 10px;
  left: 9px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 5px solid white;
}
.book_item:nth-child(2) {
  -webkit-animation-delay: 416.6666666667ms;
  animation-delay: 416.6666666667ms;
}
.book_item:nth-child(3) {
  -webkit-animation-delay: 833.3333333333ms;
  animation-delay: 833.3333333333ms;
}
.book_item:nth-child(4) {
  -webkit-animation-delay: 1250ms;
  animation-delay: 1250ms;
}
.book_item:nth-child(5) {
  -webkit-animation-delay: 1666.6666666667ms;
  animation-delay: 1666.6666666667ms;
}
.book_item:nth-child(6) {
  -webkit-animation-delay: 2083.3333333333ms;
  animation-delay: 2083.3333333333ms;
}

.shelf {
  width: 300px;
  height: 5px;
  margin: 0 auto;
  background-color: white;
  position: relative;
}
.shelf:before,
.shelf:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #345656;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.5) 30%,
    transparent 0
  );
  background-size: 10px 10px;
  background-position: 0 -2.5px;
  top: 200%;
  left: 5%;
  -webkit-animation: move 250ms linear infinite;
  animation: move 250ms linear infinite;
}
.shelf:after {
  top: 400%;
  left: 7.5%;
}

@-webkit-keyframes move {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: 10px;
  }
}

@keyframes move {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: 10px;
  }
}
@-webkit-keyframes travel {
  0% {
    opacity: 0;
    transform: translateX(300px) rotateZ(0deg) scaleY(1);
  }
  6.5% {
    transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
  }
  8.8% {
    transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
  }
  10% {
    opacity: 1;
    transform: translateX(270px) rotateZ(0deg);
  }
  17.6% {
    transform: translateX(247.2px) rotateZ(-30deg);
  }
  45% {
    transform: translateX(165px) rotateZ(-30deg);
  }
  49.5% {
    transform: translateX(151.5px) rotateZ(-45deg);
  }
  61.5% {
    transform: translateX(115.5px) rotateZ(-45deg);
  }
  67% {
    transform: translateX(99px) rotateZ(-60deg);
  }
  76% {
    transform: translateX(72px) rotateZ(-60deg);
  }
  83.5% {
    opacity: 1;
    transform: translateX(49.5px) rotateZ(-90deg);
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(0px) rotateZ(-90deg);
  }
}
@keyframes travel {
  0% {
    opacity: 0;
    transform: translateX(300px) rotateZ(0deg) scaleY(1);
  }
  6.5% {
    transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
  }
  8.8% {
    transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
  }
  10% {
    opacity: 1;
    transform: translateX(270px) rotateZ(0deg);
  }
  17.6% {
    transform: translateX(247.2px) rotateZ(-30deg);
  }
  45% {
    transform: translateX(165px) rotateZ(-30deg);
  }
  49.5% {
    transform: translateX(151.5px) rotateZ(-45deg);
  }
  61.5% {
    transform: translateX(115.5px) rotateZ(-45deg);
  }
  67% {
    transform: translateX(99px) rotateZ(-60deg);
  }
  76% {
    transform: translateX(72px) rotateZ(-60deg);
  }
  83.5% {
    opacity: 1;
    transform: translateX(49.5px) rotateZ(-90deg);
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(0px) rotateZ(-90deg);
  }
}
</style>
