<template>
  <v-container fill-height fluid class="login-bg">
    <v-row align="center" justify="center" class="login-container">
      <div class="login-header">
        <img
          src="@/assets/images/REBOOK-removebg.png"
          class="login-logo"
          @click="$router.push('/')"
        />
        <v-btn
          depressed
          class="login-header-button"
          height="50"
          @click="$router.push('/signup')"
          color="blue-grey"
        >
          SIGNUP
        </v-btn>
      </div>
      <v-col align="center">
        <div class="login-box">
          <h1 class="title" style="font-family: 'Do Hyeon', sans-serif">
            로그인
          </h1>
          <form @submit.prevent="submit">
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.email.$error }"
            >
              <v-text-field
                type="email"
                v-model.trim="$v.email.$model"
                solo
                placeholder="email을 입력해주세요."
              ></v-text-field>
            </div>
            <div class="error" v-if="!$v.email.required">
              email을 입력해주세요.
            </div>
            <div class="error" v-if="!$v.email.email">
              email을 올바르게 입력해주세요.
            </div>
            <div
              class="form-group"
              style="margin-bottom: 5px"
              :class="{ 'form-group--error': $v.password.$error }"
            >
              <v-text-field
                type="password"
                v-model.trim="$v.password.$model"
                solo
                placeholder="비밀번호를 입력해주세요."
              ></v-text-field>
            </div>
            <div class="error" v-if="!$v.password.required">
              비밀번호를 입력해주세요.
            </div>
            <div class="error" v-if="!$v.password.minLength">
              비밀번호는 적어도
              {{ $v.password.$params.minLength.min }}글자 이상이어야합니다.
            </div>
            <v-btn
              height="48"
              color="#FFFFFF"
              type="submit"
              :disabled="submitStatus === 'PENDING'"
              class="login-btn"
              style="font-size: 20px"
              >로그인</v-btn
            >
            <v-btn
              height="48"
              color="#FFFFFF"
              class="signup-btn"
              @click="goSignup"
              style="font-size: 20px"
              >회원가입</v-btn
            >
            <p class="typo__p" v-if="submitStatus === 'OK'">
              Thanks for your submission!
            </p>
            <p
              class="typo__p"
              v-if="submitStatus === 'ERROR'"
              style="color: rgb(155, 185, 155)"
            >
              모든 항목을 입력해주세요.
            </p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
          </form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id: "xxxxxx",
      },
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    login() {
      axios
        .post(`https://j4b206.p.ssafy.io/api/account/login`, {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          var data = JSON.parse(res.data.data);
          console.log(data);
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("nickname", data.user.nickname);
          localStorage.setItem("email", this.email);
          this.$emit("login");

          this.$router.push({ name: "Preference" });
          alert("정상적으로 로그인 되었습니다.");
        })
        .catch((err) => {
          console.log(err);
          alert("email과 비밀번호를 확인해주세요.");
        });
    },
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          this.login();
        }, 500);
      }
    },
    goSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");

.login-bg {
  /* background-color: #d9d9d9; */
  /* background-image: url("https://miro.medium.com/max/3840/1*Ke9U-3pgDjro0CfeEU5tEw@2x.jpeg"); */
  background-image: url("https://cf.bstatic.com/data/xphoto/1182x887/177/17718411.jpg?size=S");
  opacity: 1;
  background-repeat: no-repeat;
  background-size: cover;
  /* width: 100vw; */
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  /* height: 100vh; */
  margin: 0;
  font-family: "Do Hyeon", sans-serif;
}
.login-header {
  /* position: fixed; */
  /* top: 0; */
  min-width: 100%;
  width: 100%;
  height: 75px;
  background-color: rgb(0, 0, 0, 0.3);
  /* z-index: 3000; */
}
.login-logo {
  height: 75px;
}
.login-logo:hover {
  cursor: pointer;
  /* background-color: black; */
}
.login-header-button {
  /* height: 50px; */
  max-height: 50px;
  width: 90px !important;
  float: right;
  margin-right: 20px;
  background-color: rgb(97, 88, 88) !important;
  font-size: 18px;
  color: white;
}
.login-container {
  max-width: 100vw;
  width: 100vw;
  height: 100%;
  min-height: 1100px;
  display: flex;
  /* background-color: rgb(0, 0, 0, 0.4); */
}
.login-box {
  margin-top: -240px;
  /* background-color: rgb(61, 44, 8, 0.6); */
  background-color: rgba(133, 102, 63, 0.6);
  width: 35%;
  height: 80%;
  padding-top: 4%;
  padding-bottom: 4%;
  max-height: 800px;
  border-radius: 30px;
}

.title {
  /* margin-top: 20%; */
  color: white;
  font-size: 2.5rem;
  margin-bottom: 5vh;
}

.v-input {
  width: 65%;
  height: 15%;
  max-height: 65%;
  /* margin: 1%; */
}

.v-btn {
  width: 65%;
  /* display: block; */
  margin: 1rem;
  /* max-width: 65%; */
  /* min-width: 65%; */
  min-height: 20%;
}
.v-btn:hover {
  background-color: rgb(155, 185, 155) !important;
}

.form-group__message,
.error {
  font-size: 1rem;
  line-height: 1;
  display: none;
  margin-left: 14px;
  margin-top: -1.9375rem;
  margin-bottom: 0.9375rem;
}

.form-group--error + .error {
  display: block;
  color: #fb3232d2;
}
</style>
