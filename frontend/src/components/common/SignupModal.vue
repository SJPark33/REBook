<template v-slot:default="dialog">
  <v-card>
    <v-row align="center" justify="center">
      <v-col align="center">
        <v-toolbar color="#206844" dark>회원가입</v-toolbar>
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
            width="400"
            height="48"
            color="#FFFFFF"
            type="submit"
            :disabled="submitStatus === 'PENDING'"
            class="signup-btn"
            >회원가입</v-btn
          >
          <v-btn width="400" height="48" color="#FFFFFF" class="signup-btn"
            >로그인</v-btn
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
  </v-card>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "SignupModal",
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
