<template>
  <div class="main-box">
    <img src="@/assets/images/topo.png" />
    <div class="login">
      <div class="header">Argus控制平台登录</div>
      <login-form></login-form>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";
export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;
}

.main-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  z-index: -1;
}

img {
  position: relative;
  display: block;
  top: 6%;
  width: 190px;
  height: 190px;
  margin: 0 auto;
}

.login {
  position: absolute;
  top: 20%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 400px;
  height: 400px;
}

.header {
  font-size: 25px;
  font-family: '楷体';
  color: rgb(98, 94, 91);
  font-weight: 700;
  margin: 0 auto 0;
  text-align: center;
}
</style>
