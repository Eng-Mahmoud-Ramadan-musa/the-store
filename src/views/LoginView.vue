<template>
  <div class="con">
    <form>
      <input type="text" v-model="textName" placeholder="user name" />
      <input type="password" v-model="textPass" placeholder="user password" />
      <button type="submit" @click="checkDataUser(textName, textPass)">
        login
      </button>
      <div>
        <p>password forget ?</p>
        <router-link to="/singup">singup</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {};
  },
  methods: {
    checkDataUser(name, password) {
      this.$store.dispatch("checkDataUser", { name, password });
    },
  },
};
</script>

<style lang="scss">
.con {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  > form {
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      135deg,
      rgb(28, 156, 216) 30%,
      rgba(162, 162, 163, 0.4) 20%
    );
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 500px;
    height: 95%;
    gap: 20px;
    padding-inline: 20px;
    input {
      width: 90%;
      border: 1px solid;
      border-radius: 8px;
      padding-left: 10px;
      transition: 0.4s;
      &:focus {
        transform: scale(1.1);
      }
    }
    button {
      border: 1px solid;
      border-radius: 8px;
      padding: 3px 10px;
      background-color: red;
      color: #fff;
      font-weight: bold;
      font-size: 1.3rem;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}

@media (max-width: 550px) {
  .con {
    > div:first-child {
      width: 110%;
      height: 75%;
    }
  }
}
</style>
