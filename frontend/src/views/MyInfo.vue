<template>
  <v-container fill-height fluid class="signup-bg">
    <v-row align="center" justify="center">
      <v-col align="center">
        <h1 class="title">회원정보 수정</h1>
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
              placeholder="기존 비밀번호를 입력해주세요."
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
            :class="{ 'form-group--error': $v.newPassword.$error }"
          >
            <v-text-field
              type="password"
              v-model.trim="$v.newPassword.$model"
              solo
              placeholder="새로운 비밀번호를 입력해주세요."
            ></v-text-field>
          </div>
          <div class="error" v-if="!$v.newPassword.required">
            비밀번호를 입력해주세요.
          </div>
          <div class="error" v-if="!$v.newPassword.minLength">
            비밀번호는 적어도
            {{ $v.newPassword.$params.minLength.min }}글자 이상이어야합니다.
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
            width="400"
            height="48"
            color="#FFFFFF"
            type="submit"
            :disabled="submitStatus === 'PENDING'"
            class="signup-btn"
            >수정하기</v-btn
          >
          <p class="typo__p" v-if="submitStatus === 'OK'">
            Thanks for your submission!
          </p>
          <p class="typo__p" v-if="submitStatus === 'ERROR'">
            모든 항목을 입력해주세요.
          </p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>
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
  name: "MyInfo",
  data() {
    return {
      email: "",
      newPassword: "",
      repeatPassword: "",
      password: "",
      nickname: "",
      submitStatus: null,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    newPassword: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs("newPassword"),
    },
    password: {
      required,
      minLength: minLength(6),
    },
    nickname: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    signup() {
      const config = this.setToken();
      const info = {
        email: this.email,
        newPassword: this.newPassword,
        nickname: this.nickname,
        password: this.password,
      };
      axios
        .put(`https://j4b206.p.ssafy.io/api/account/update/`, info, config)
        .then((res) => {
          var data = JSON.parse(res.data.data);
          console.log(data);
          localStorage.setItem("nickname", data.nickname);
          this.$router.push({ name: "Home" });
          location.reload();
          this;
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
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          this.signup();
        }, 500);
      }
    },
    jwtDecode(t) {
      let token = {};
      token.raw = t;
      token.header = JSON.parse(window.atob(t.split(".")[0]));
      token.payload = JSON.parse(window.atob(t.split(".")[1]));
      return token;
    },
    getEmail() {
      var token = localStorage.getItem("jwt");
      var decoded = this.jwtDecode(token);
      this.email = decoded.payload.email;
    },
    setToken() {
      const token = localStorage.getItem("jwt");
      const config = {
        headers: {
          Authorization: token,
        },
      };
      console.log(config);
      return config;
    },
  },
  created() {
    this.getEmail();
  },
};
</script>
<style scoped>
.signup-bg {
  background-color: #d9d9d9;
  opacity: 0.8;
  max-width: 100%;
  height: 900px;
  margin: 0;
}

.title {
  margin: 50px;
}

.v-input {
  width: 400px;
  margin: 1rem;
}

.v-btn {
  display: block;
  margin: 1rem;
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
