<template>
  <div class="app">
    <app-header />
    <main class="main">
      <app-links />
      <article>
        <div><router-view /></div>
        <footer>
          <p>
            by desingr <i class="fa fa-copyright" aria-hidden="true"></i
            ><b> mahmoud ramadan</b>
          </p>
          <div class="social">
            <ul class="d-flex list-unstyled gap-3 fs-4 align-items-lg-center">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100007283614477"
                >
                  <i class="fa-brands fa-facebook" style="--i: #684ff1"></i
                ></a>
              </li>
              <li>
                <a href="https://wa.me/+201129780862">
                  <i class="fa-brands fa-whatsapp" style="--i: #0f0"></i
                ></a>
              </li>
              <li>
                <a href="https://t.me/MahmoudRamadan11">
                  <i class="fa-brands fa-telegram" style="--i: #00f"></i
                ></a>
              </li>
            </ul>
          </div>
        </footer>
      </article>
    </main>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import AppLinks from "./components/AppLinks";
export default {
  name: "app",
  components: {
    AppLinks,
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  .main {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    height: calc(100vh - 75px);
    overflow: hidden;
    width: 100%;
    border: 1px solid;
    padding-bottom: 5px;

    article {
      position: relative;
      width: 100%;
      padding: 10px;
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      > div {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 90%;
        text-align: center;
        overflow-y: auto;
        padding-top: 3%;
        padding-bottom: 5%;
      }
      footer {
        padding: 5px 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        z-index: 999;
        overflow: hidden;
        background-color: #1e2f41;
        color: #fff;
        p {
          display: flex;
          align-items: center;
          i {
            margin-inline: 5px;
          }
          b {
            color: red;
            font-size: 1.3rem;
          }
        }
        .social {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          i {
            background-color: var(--i);
            border-radius: 50%;
            color: #fff;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
}
@media (max-width: 700px) {
  #app {
    height: 100vh;
  }
  .main {
    height: 100%;
    article {
      > div {
        width: 90%;
        // overflow: hidden;
        padding-bottom: 100px;
      }
      footer {
        flex-direction: column;
        p {
          align-items: center;
          justify-content: center;
        }
        > a {
          margin-top: -10px;
          margin-bottom: 5px;
        }
        .social {
          padding-bottom: 10px;
        }
      }
    }
  }
}
</style>
