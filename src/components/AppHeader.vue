<template>
  <header>
    <span><a href="#">fashion</a></span>
    <div class="d-flex align-items-center gap-3">
      <router-link to="/search"
        ><i class="fa-solid fa-search fs-3"></i>
      </router-link>
      <router-link to="/login"
        ><i class="fa-solid fa-circle-user fs-3"></i
      ></router-link>
      <router-link to="/shoping"
        ><i class="fa fa-shopping-cart"></i>
        <span v-text="this.$store.state.totalCountShoping"></span
      ></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
header {
  background-color: #1e2f41;
  color: #fff;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2%;
  padding-inline: 10%;
  width: 100%;

  span a {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    color: red;
    text-decoration: none;
  }

  a {
    color: #fff;
    font-size: 1.5rem;
    position: relative;
    span {
      color: #fff;
      text-shadow: 2px 1px 1px #000;
      background-color: rgb(92, 243, 33);
      border-radius: 50%;
      padding-inline: 5px;
      font-size: 16px;
      font-weight: bold;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(10px) translatey(-9px);
    }

    &.router-link-exact-active {
      color: #30c481;
    }
  }
}

@media (max-width: 550px) {
  header {
    padding-left: 5%;
    padding-right: 15%;
    span a {
      font-size: 1.4rem;
    }
  }
}
</style>
