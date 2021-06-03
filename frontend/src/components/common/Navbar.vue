<template>
  <div class="nav">
    <v-app id="header" style="height: 180px; min-height: 180px !important">
      <div class="top-header">
        <div class="logo" @click="toHome">
          <img src="@/assets/images/REBOOK.png" style="height: 90%" />
        </div>
        <div class="myinfo-container">
          <div v-if="!nickname">
            <button @click="login" style="margin-right: 5px; margin-top: 8px">
              <h5>로그인해주세요.</h5>
            </button>
          </div>
          <div v-else>
            <div class="hello-user-container">
              <div class="hello-user">{{ nickname }}님 환영합니다.</div>
              <div class="profile-container">
                <v-icon
                  dark
                  color="green"
                  size="35px"
                  @click="$router.push({ name: 'Chat' })"
                >
                  mdi-bell
                </v-icon>
                <Member></Member>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-container">
        <div class="tab-container">
          <div
            class="tab"
            v-for="(tab, i) in tabItems"
            :key="i"
            @click="$router.push(tab.path)"
          >
            <div class="tab-text">
              {{ tab.title }}
            </div>
          </div>
        </div>
        <div class="search">
          <div class="search-box">
            <input
              type="text"
              class="searchTerm"
              placeholder=" 원하는 책을 검색해주세요"
              v-model="bookSearch"
              @keyup.enter="search"
            />
            <button type="submit" class="searchButton">
              <font-awesome-icon
                icon="search"
                style="height: 26px; width: 26px"
                color="white"
                height="30"
                @click="search"
              />
            </button>
          </div>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import Member from "./Member.vue";
export default {
  name: "App",
  data() {
    return {
      bookSearch: "",
      clicked: false,
      tabItems: [
        { title: "사이트소개", path: "/about" },
        { title: "카테고리", path: "/category" },
        { title: "장터", path: "/market" },
        { title: "내 서재", path: "/userpage" },
      ],
      nickname: "",
    };
  },
  components: {
    Member,
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    search() {
      if (this.bookSearch.length < 2) {
        alert("2글자 이상으로 입력해주세요!");
      } else {
        this.$router.push({
          name: "BookSearch",
          // name: "About",
          query: { keyword: this.bookSearch },
        });
        location.reload();
      }
    },
    getNickname() {
      this.nickname = localStorage.getItem("nickname");
    },
    login() {
      this.$router.push("/login");
    },
  },
  created() {
    this.getNickname();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");
#header {
  /* position: fixed; */
  top: 0px;
}
.top-header {
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  /* position: fixed; */
  background-color: white;
}
.logo {
  height: 100%;
  margin-left: 30px;
  display: flex;
  align-items: center;
  float: left;
  /* height: 110px; */
}
.logo:hover {
  cursor: pointer;
}
.myinfo-container {
  height: 80%;
  display: flex;
  align-items: center;
  /* float: right; */
  /* width: 1200px; */
  margin-left: auto;
  padding-right: 5vw;
}
.hello-user-container {
  display: flex;
  align-items: center;
  float: right;
  margin-left: auto;
  /* margin-left: 75vw; */
  height: 100%;
  width: 300px;
}
.hello-user {
  text-align: right;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  width: 250px;
  padding-right: 10px;
  /* border: 3px solid blue; */
}
.navbar-container {
  background-color: #345656;
  height: 60px;
  min-width: 1600px;
}
.tab-container {
  height: 100%;
  width: 40vw;
  min-width: 600px;
  margin-left: 5vw;
  float: left;
}
.tab {
  height: 100%;
  width: 10vw;
  min-width: 150px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab:hover {
  background-color: rgb(2, 119, 94);
  cursor: pointer;
}
.tab-text {
  text-align: center;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  color: white;
}
.search {
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  margin-left: 10vw;
  /* background-color: red; */
  width: 40vw;
  min-width: 500px;
}
.search-box {
  float: left;
  width: 1000px;
  min-width: 500px;
  height: 75%;
  display: flex;
  align-items: center;
  /* background-color: red; */
}

.searchTerm {
  width: 70%;
  /* border: 3px solid black; */
  border-right: none;
  padding: 5px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  background-color: #1b6844;
  transition-property: background-color, width;
  transition-duration: 0.7s;
  color: black;
  font-size: 18px;
}
.searchTerm::placeholder {
  color: white;
  font-size: 15px;
}

.searchTerm:focus {
  background-color: rgb(142, 187, 142);
  width: 80%;
}

.searchButton {
  width: 40px;
  height: 40px;
  /* border: 1px solid wh; */
  background: black;
  text-align: center;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
}
.v-application--wrap {
  min-height: 0px !important;
}
.profile-container {
  display: flex;
}
</style>
