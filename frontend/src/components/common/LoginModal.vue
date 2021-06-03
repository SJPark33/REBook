<template v-slot:default="dialog">
  <v-card v-if="is_login">
    <v-row align="center" justify="center">
      <v-col align="center">
        <v-toolbar color="#206844" dark>로그인</v-toolbar>
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
            width="400"
            height="48"
            color="#FFFFFF"
            type="submit"
            :disabled="submitStatus === 'PENDING'"
            class="login-btn"
            >로그인</v-btn
          >
          <v-btn
            width="400"
            height="48"
            color="#FFFFFF"
            class="signup-btn"
            @click="goSignup"
            >회원가입</v-btn
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
  <SignupModal v-else></SignupModal>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { required, email, minLength } from "vuelidate/lib/validators";
import SignupModal from "./SignupModal.vue";

export default {
  name: "LoginModal",
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id: "xxxxxx",
      },
      is_login: true,
    };
  },
  components: {
    SignupModal,
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
        .post(`https://j4b206.p.ssafy.io/api/account/login/`, {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          var data = JSON.parse(res.data.data);
          console.log(data);
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("nickname", data.user.nickname);

          this.$emit("login");
          this.$router.push({ name: "Home" });
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
      this.is_login = false;
    },
  },
  created() {
    this.is_login = true;
  },
};
</script>

<style scoped>
.login-bg {
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
