<template>
  <div>
    <form>
      <ul>
        <li>
          <div class="text">
            <span class="iconfont">&#xe501;</span>
            <input type="text" placeholder="请输入用户名" v-model="userName" />
          </div>
        </li>
        <li>
          <div class="password">
            <span class="iconfont">&#xe613;</span>
            <input
              type="password"
              placeholder="••••••••••••"
              v-model="userPwd"
            />
          </div>
        </li>
        <li class="remember">
          <input type="checkbox" v-model="checked" />Remember Me
        </li>
        <li>
          <a>Forgot username or password?</a>
        </li>

        <li>
          <a>Haven't had an account yet?</a>
        </li>

        <li>
          <input type="button" value="Login" @click="loginNow()" />
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import "@/assets/icons/iconfont.css";
export default {
  name: "LoginForm",
  data() {
    return {
      userName: "",
      userPwd: "",
      checked: false
    };
  },
  methods: {
    loginNow() {
      this.$router.push("/homepage");
    }
  }
};
</script>

<style lang="stylus" scoped>
.iconfont {
  font-family: iconfont;
  position: absolute;
  top: 12px;
  left: 10px;
}

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.main-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);

  form {
    width: 260px;
    height: 260px;
    margin: 15px auto;
    padding: 30px;
    box-shadow: 0px 1px 2px 1px #aaaaaa, inset 0px 1px 1px rgba(255, 255, 255, 0.7);
    border-radius: 3px;

    ul {
      width: 100%;
      height: 100%;
      text-align: left;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      li {
        div {
          width: 260px;
          height: 40px;
          background: #e1dcd8;
          color: rgb(98, 94, 91);
          box-shadow: inset 0px 2px 5px #aaaaaa;
          border-radius: 5px;
          position: relative;

          input {
            height: 40px;
            width: 190px;
            padding: 0 35px;
            border: none;
            background: #e1dcd8;
            color: rgb(98, 94, 91);
            box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.7), inset 0px 2px 5px #aaaaaa;
            border-radius: 5px;

            &:focus {
              outline: none;
              background: #f5f2ef;
            }
          }
        }

        a {
          font-size: 15px;
          font-family: 'Oleo Script';
          color: rgb(152, 142, 135);
        }

        input[type='button'] {
          width: 100%;
          height: 40px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 18px;
          color: #ffffff;
          background: -moz-linear-gradient(top, #94aa64 0%, #7a924a 50%, #607738);
          background: -webkit-gradient(linear, left top, left bottom, from(#94aa64), color-stop(0.5, #7a924a), to(#607738));
          -moz-border-radius: 5px;
          -webkit-border-radius: 5px;
          border-radius: 5px;
          border: 1px solid #7d8862;
          -moz-box-shadow: 0px 1px 0px rgba(170, 170, 170, 1), inset 0px 1px 1px rgba(255, 255, 255, 0.7);
          -webkit-box-shadow: 0px 1px 0px rgba(170, 170, 170, 1), inset 0px 1px 1px rgba(255, 255, 255, 0.7);
          box-shadow: 0px 1px 0px rgba(170, 170, 170, 1), inset 0px 1px 1px rgba(255, 255, 255, 0.7);
          text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3), 0px 0px 0px rgba(255, 255, 255, 0);

          &:hover {
            opacity: 0.8;
          }

          &:active {
            width: 100%;
            height: 40px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 18px;
            color: #ffffff;
            background: -moz-linear-gradient(top, #607738 0%, #7a924a 50%, #94aa64);
            background: -webkit-gradient(linear, left top, left bottom, from(#607738), color-stop(0.5, #7a924a), to(#94aa64));
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
            border: 1px solid #7d8862;
            -moz-box-shadow: 0px -1px 0px rgba(170, 170, 170, 1), inset 0px -1px 1px rgba(255, 255, 255, 0.7);
            -webkit-box-shadow: 0px -1px 0px rgba(170, 170, 170, 1), inset 0px -1px 1px rgba(255, 255, 255, 0.7);
            box-shadow: 0px -1px 0px rgba(170, 170, 170, 1), inset 0px -1px 1px rgba(255, 255, 255, 0.7);
            text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3), 0px 0px 0px rgba(255, 255, 255, 0);
          }
        }
      }

      .remember {
        font-size: 18px;
        font-family: 'Oleo Script';
        font-weight: bold;
        color: rgb(98, 94, 91);
        position: relative;

        input[type='checkbox'] {
          width: 20px;
          height: 20px;
          vertical-align: bottom;
          margin-right: 12px;
          visibility: show;
        }
      }
    }
  }
}
</style>
