<template>
  <div
    class="div d-flex flex-column justify-content-between align-items-center"
  >
    <div class="links">
      <router-link to="/" exact class="d-flex align-items-center gap-2"
        ><i class="fa-solid fa-home"></i><span>Home</span></router-link
      >
      <router-link to="/desc" class="d-flex align-items-center gap-2"
        ><i class="fa-solid fa-percent"></i><span>descount</span></router-link
      >
      <router-link to="/phone" class="d-flex align-items-center gap-2"
        ><i class="fa-solid fa-mobile-screen"></i
        ><span>phones</span></router-link
      >
      <router-link to="/laptops" class="d-flex align-items-center gap-2"
        ><i class="fa-solid fa-laptop"></i><span>laptops</span></router-link
      >
      <router-link to="/huors" class="d-flex align-items-center gap-2"
        ><i class="fa-solid fa-clock"></i><span>huors</span></router-link
      >
      <router-link to="/men" class="d-flex align-items-center gap-2"
        ><i class="fa-solid fa-person"></i><span>men</span></router-link
      >
      <router-link to="/women" class="d-flex align-items-center gap-2"
        ><i class="fa-solid fa-person-dress"></i><span>women</span></router-link
      >
      <router-link to="/children" class="d-flex align-items-center gap-2"
        ><i class="fa-solid fa-children"></i><span>children</span></router-link
      >
    </div>
    <div class="users">
      <div class="user align-items-center">
        <img :src="this.$store.state.userLogin.image" alt="" />
        <h5>{{ this.$store.state.userLogin.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLink",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.div {
  background-color: #2c3e50;
  padding: 20px 10px 5px 10px;
  text-transform: capitalize;
  float: left;
  color: #fff;
  width: 170px;
  height: 100%;
  .links {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
    width: 100%;
    height: 65%;
    justify-content: space-between;
    align-items: left;
    overflow: hidden;
    // border: 1px solid;
    padding: 10px;
    span {
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .users {
    // border: 1px solid;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    .user {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      object-fit: cover;
      img {
        width: 80px;
        height: 80px;
        border: 1px solid;
        border-radius: 50%;
        padding: 5px;
      }
      h5 {
        white-space: nowrap;
        overflow: hidden;
        color: #fff;
        height: 50px;
      }
    }
  }
}
//
a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  text-align: start;

  &.router-link-exact-active {
    color: #42b983;
  }
}
@media (max-width: 500px) {
  .div {
    width: 100px;
    .links {
      align-items: center;
      a {
        span {
          display: none;
        }
      }
    }
    .user {
      height: 30%;
      h5 {
        white-space: nowrap;
      }
    }
  }
}
</style>
