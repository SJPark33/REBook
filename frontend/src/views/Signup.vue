<template>
  <v-container fill-height fluid class="signup-bg">
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
          @click="$router.push('/login')"
          color="blue-grey"
        >
          LOGIN
        </v-btn>
      </div>
      <v-col align="center">
        <div class="login-box">
          <h1 class="title">회원가입</h1>
          <form @submit.prevent="submit">
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.email.$error }"
            >
              <v-text-field
                type="email"
                v-model.trim="$v.email.$model"
                solo
                placeholder="email를 입력해주세요."
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
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.repeatPassword.$error }"
            >
              <v-text-field
                type="password"
                v-model.trim="$v.repeatPassword.$model"
                solo
                placeholder="비밀번호를 다시 한 번 입력해주세요."
              ></v-text-field>
            </div>
            <div class="error" v-if="!$v.repeatPassword.sameAsPassword">
              비밀번호는 동일해야합니다.
            </div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.nickname.$error }"
            >
              <v-text-field
                type="name"
                v-model.trim="$v.nickname.$model"
                solo
                placeholder="닉네임을 입력해주세요."
              ></v-text-field>
            </div>
            <div class="error" v-if="!$v.nickname.required">
              별명을 입력해주세요!
            </div>
            <div class="error" v-if="!$v.nickname.minLength">
              별명은 적어도 {{ $v.nickname.$params.minLength.min }} 글자
              이상이어야 합니다.
            </div>
            <v-btn
              height="48"
              color="#FFFFFF"
              type="submit"
              :disabled="submitStatus === 'PENDING'"
              class="signup-btn"
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      nickname: "",
      submitStatus: null,
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
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
    nickname: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    signup() {
      axios
        .post(`https://j4b206.p.ssafy.io/api/account/signup`, {
          // .post(`http://localhost:8080/api/account/signup`, {
          email: this.email,
          nickname: this.nickname,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          this.signup();
        }, 500);
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
.signup-bg {
  /* background-image: url("https://www.etri.re.kr/webzine/eng/20190726/common/images/sub04_03.jpg"); */
  background-image: url("https://library.navercorp.com/img/gallery/big/img_gallery_big1.jpg");
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
  background-color: rgb(0, 0, 0, 0.05);
}
.login-box {
  margin-top: -240px;
  /* background-color: rgb(61, 44, 8, 0.6); */
  background-color: rgba(175, 148, 115, 0.8);
  width: 35%;
  height: 85%;
  padding-top: 2%;
  padding-bottom: 4%;
  max-height: 800px;
  border-radius: 30px;
}

.title {
  /* margin: 50px; */
  margin-bottom: 5%;
  color: white;
  font-size: 2.5rem;
  font-family: "Do Hyeon", sans-serif;
}

.v-input {
  width: 65%;
  height: 15%;
  max-height: 65%;
}

.v-btn {
  width: 65%;
  /* display: block; */
  margin: 1rem;
  max-width: 65%;
  min-height: 20%;
  display: block;
  margin: 1rem;
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
.signup-btn {
  font-size: 25px;
}
</style>
