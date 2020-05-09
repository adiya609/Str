<!-- Компонентэд заавал байх ёстой "3-н тааг"
-->

  

<template>
  <div class="title">
    <div class="header">
      <h4>{{title[0]}} | {{title[1]}}</h4>
      <h4 class="left">Хүргэлт: {{next[0]}} | {{next[1]}}</h4>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="meta">
            <span>MEgASTOrE</span>
            <button v-on:click="counter">хайх</button>
            <input type="text" v-model="search" placeholder="search title..." />
            <div class="form">
              <div class="register">
                {{register[0]}}
                <br />
                {{register[1]}}
              </div>
              <div class="login">
                {{login[0]}}
                <br />
                {{login[1]}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-menu">
      <div class="container-menu">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ["+976-99980662", "09:00-20:00 цаг"],
      next: ["Зөвхөн ажлын өдрүүдэд", "Тусламж"],
      register: ["Миний", "сагс"],
      login: ["бүртгүүлэх", "нэвтрэх"]
    };
  },
  methods: {}
};
</script>

<style scoped>
.title {
  height: 40px;
  background-color: #f1f2f6;
}
.header {
  /*border: 1px solid red;*/
  width: 1344px;
  height: 40px;

  margin-right: auto;
  margin-left: auto;
  display: flex;
  position: relative;
}

.header h4 {
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 10px;
  font-size: 12px;
  color: rgb(76, 83, 98);
}
.left {
  margin-left: 910px;
}
.row {
  width: 1360px;
  height: 76px;
  /*border: 1px solid red;*/
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  /*background-color: red;*/
}
input {
  margin-top: auto;
  margin-bottom: auto;
  width: 457px;
  height: 32px;
  margin-left: 4.3px;
}
button {
  margin-top: auto;
  margin-bottom: auto;
  width: 56px;
  height: 38px;
  margin-right: -3.9px;
  background-color: #ffa502;
  border: none;
}
.meta {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 30px;
  font-weight: bold;
  /*border: 1px solid green;*/
  color: rgb(76, 83, 98);
  margin-right: 45px;
  display: flex;
  position: relative;
}
.col-12 {
  display: flex;
}
span {
  margin-right: 40px;
  margin-top: auto;
  margin-bottom: auto;
}
.register {
  font-size: 13px;
  color: rgb(36, 36, 36);
  font-weight: 400;
  text-transform: uppercase;
}
.login {
  font-size: 13px;
  color: rgb(36, 36, 36);
  font-weight: 400;
  text-transform: uppercase;
  margin-left: 120px;
}
.form {
  width: auto;
  /*border: 1px solid red;*/
  margin-left: 360px;
  display: flex;
}
.main-menu {
  border: 1px solid red;
  width: 100%;
  height: 45px;
  background-color: #6c757d;
}
.container-menu {
  width: 1344px;
  height: 45px;
  border: 1px solid red;
  margin-right: auto;
  margin-left: auto;
}
</style>
