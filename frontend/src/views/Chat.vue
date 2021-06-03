<template>
  <div class="container">
    <h3 class="text-center">{{ nickname }}님의 양상추마켓🥬</h3>
    <div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
            <div class="srch_bar">
              <div class="stylish-input-group">
                <!-- <input type="text" class="search-bar" placeholder="Search" /> -->
                <!-- <span class="input-group-addon">
                  <button type="button">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </span> -->
              </div>
            </div>
          </div>
          <div class="inbox_chat">
            <div
              class="chat_list active_chat"
              v-for="(chat, i) in chatList"
              :key="i"
            >
              <div class="chat_people" @click="showChat(chat.id)">
                <div class="chat_img">
                  <img
                    src="https://ptetutorials.com/images/user-profile.png"
                    alt="sunil"
                  />
                </div>
                <div class="chat_ib">
                  <h5>{{ chat.id }} <span class="chat_date">Dec 25</span></h5>
                  <p>
                    Test, which is a new approach to have all solutions
                    astrology under one roof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mesgs">
          <div class="msg_history">
            <div v-for="(message, i) in messages" :key="i" class="incoming_msg">
              <div class="incoming_msg" v-if="message.senduser !== user">
                <div class="incoming_msg_img">
                  <img
                    class="ml-3"
                    src="https://www.flaticon.com/svg/static/icons/svg/3135/3135789.svg"
                    alt="sunil"
                  />
                </div>
                <div class="received_msg mb-4">
                  <span class="time_date ml-3" style="float: left">
                    {{ message.createdAt }}</span
                  ><br />
                  <div class="received_withd_msg ml-3">
                    <p>{{ message.message }}</p>
                  </div>
                </div>
              </div>
              <div class="outgoing_msg mr-3" v-else>
                <div class="sent_msg mb-4 ml-3">
                  <span class="time_date" style="float: right">
                    {{ message.createdAt }}</span
                  ><br />
                  <div class="sent_withd_msg ml-3">
                    <!--  style="min-width: 2%" -->
                    <p>
                      {{ message.message }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input
                @keyup.enter="saveMessage"
                v-model="message"
                type="text"
                class="write_msg px-3"
                placeholder="메세지를 입력해주세요."
              />
              <button
                @keyup.enter="saveMessage"
                @click="saveMessage"
                class="msg_send_btn mr-4"
                type="button"
              >
                <!-- <i aria-hidden="true">✏️</i> -->
                <img src="../assets/images/lettuce.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

<script>
import axios from "axios";
export default {
  name: "Chat",
  data() {
    return {
      message: null,
      messages: [],
      createdAt: null,
      nickname: localStorage.getItem("nickname"),
      user: "",
      chatId: 0,
      chatList: null,
      currentChat: 0,
    };
  },
  methods: {
    saveMessage(sendnick) {
      if (this.message === "" || this.message === null) {
        return;
      }
      //save to message
      db.collection(this.chatId).add({
        senduser: this.user,
        message: this.message,
        createdAt: new Date().toLocaleString(),
      });
      this.message = null;
      setTimeout(() => {
        document.querySelector(
          ".msg_history"
        ).scrollTop = document.querySelector(".msg_history").scrollHeight;
      }, 100);
    },
    fetchMessages() {
      db.collection(this.chatId)
        .orderBy("createdAt")
        .onSnapshot((querySnapshot) => {
          let allMessages = [];
          querySnapshot.forEach((doc) => {
            allMessages.push(doc.data());
          });
          this.messages = allMessages;
          setTimeout(() => {
            document.querySelector(
              ".msg_history"
            ).scrollTop = document.querySelector(".msg_history").scrollHeight;
          }, 100);
        });
    },
    getChatList() {
      axios
        .post(
          `https://j4b206.p.ssafy.io/api/yangsangchu/deallist/${this.user}`,
          // `http://localhost:8080/api/yangsangchu/deallist/${this.user}`,
          {
            // .post(`http://localhost:8080/api/yangsangchu/deallist/${this.user}`, {
            headers: {
              Authorization: `${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          this.chatList = res.data;
          // var data = JSON.parse(res.data);
          // console.log(data);
          // this.$emit("login");
          // this.$router.push({ name: "Home" });
          // console.log(this.chatList[0].id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showChat: function (curChatId) {
      this.chatId = "" + curChatId;
      this.fetchMessages();
      this.getChatList();
    },
  },
  mounted() {
    this.chatId = "0";
    this.user = localStorage.getItem("email");
    console.log(localStorage.getItem("email"), this.user);
    this.fetchMessages();
    this.getChatList();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400&display=swap");
* {
  font-family: "Noto Sans KR", sans-serif;
}
.container {
  max-width: 1170px;
  margin: auto;
}
img {
  max-width: 100%;
}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%;
  border-right: 1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac {
  margin: 20px 0 0;
}

.recent_heading {
  float: left;
  width: 40%;
}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
  /* padding: ; */
}
.headind_srch {
  padding: 10px 29px 10px 20px;
  overflow: hidden;
  border-bottom: 1px solid #c4c4c4;
}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input {
  border: 1px solid #cdcdcd;
  border-width: 0 0 1px 0;
  width: 80%;
  padding: 2px 0 4px 6px;
  background: none;
}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon {
  margin: 0 0 0 -27px;
}

.chat_ib h5 {
  font-size: 15px;
  color: #464646;
  margin: 0 0 8px 0;
}
.chat_ib h5 span {
  font-size: 13px;
  float: right;
}
.chat_ib p {
  font-size: 14px;
  color: #989898;
  margin: auto;
}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people {
  overflow: hidden;
  clear: both;
}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat {
  height: 550px;
  overflow-y: scroll;
}

.active_chat {
  background: #ebebeb;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
}
.received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg {
  width: 57%;
}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

.sent_msg p {
  background: #69a9a3 none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0;
  color: #fff;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}
.sent_msg {
  float: right;
  max-width: 46%;
  /* min-width: 21%; */
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging {
  padding: 0 0 50px 0;
}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
/* p {
  margin: 0;
} */
</style>
