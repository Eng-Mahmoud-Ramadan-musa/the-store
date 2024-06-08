<template>
  <div class="main">
    <router-link to="/desc" v-slot="{ navigate }">
      <div @click="navigate">
        <h2>descount</h2>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(slide, slideIndex) in $store.state.dataProductes"
              :key="slideIndex"
              data-bs-target="#carouselExampleIndicators"
              :data-bs-slide-to="slideIndex"
              :class="{ active: slideIndex === 0 }"
            ></li>
          </ol>
          <div class="carousel-inner h-25">
            <div
              v-for="(slide, slideIndex) in $store.state.dataProductes"
              :key="slideIndex"
              class="carousel-item"
              :class="{ active: slideIndex === 0 }"
            >
              <img :src="slide.thumbnail" :alt="slide.alt" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </router-link>
    <router-link to="/phone" v-slot="{ navigate1 }">
      <div @click="navigate1">
        <h2>phones</h2>
        <div
          id="carouselExampleIndicators1"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(slide, slideIndex) in $store.state.dataPhones"
              :key="slideIndex"
              data-bs-target="#carouselExampleIndicators1"
              :data-bs-slide-to="slideIndex"
              :class="{ active: slideIndex === 0 }"
            ></li>
          </ol>
          <div class="carousel-inner h-25">
            <div
              v-for="(slide, slideIndex) in $store.state.dataPhones"
              :key="slideIndex"
              class="carousel-item"
              :class="{ active: slideIndex === 0 }"
            >
              <img :src="slide.thumbnail" :alt="slide.alt" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators1"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators1"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </router-link>
    <router-link to="/laptops" v-slot="{ navigate2 }">
      <div @click="navigate2">
        <h2>laptops</h2>
        <div
          id="carouselExampleIndicators2"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(slide, slideIndex) in $store.state.dataLaptops"
              :key="slideIndex"
              data-bs-target="#carouselExampleIndicators2"
              :data-bs-slide-to="slideIndex"
              :class="{ active: slideIndex === 0 }"
            ></li>
          </ol>
          <div class="carousel-inner h-25">
            <div
              v-for="(slide, slideIndex) in $store.state.dataLaptops"
              :key="slideIndex"
              class="carousel-item"
              :class="{ active: slideIndex === 0 }"
            >
              <img :src="slide.thumbnail" :alt="slide.alt" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators2"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators2"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </router-link>
    <router-link to="/huors" v-slot="{ navigate3 }">
      <div @click="navigate3">
        <h2>huors</h2>
        <div
          id="carouselExampleIndicators3"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(slide, slideIndex) in $store.state.thisHuors"
              :key="slideIndex"
              data-bs-target="#carouselExampleIndicators5"
              :data-bs-slide-to="slideIndex"
              :class="{ active: slideIndex === 0 }"
            ></li>
          </ol>
          <div class="carousel-inner h-25">
            <div
              v-for="(slide, slideIndex) in $store.state.thisHuors"
              :key="slideIndex"
              class="carousel-item"
              :class="{ active: slideIndex === 0 }"
            >
              <img :src="slide.thumbnail" :alt="slide.alt" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators3"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators3"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </router-link>
    <router-link to="/men" v-slot="{ navigate4 }">
      <div @click="navigate4">
        <h2>men</h2>
        <div
          id="carouselExampleIndicators4"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(slide, slideIndex) in $store.state.dataMen"
              :key="slideIndex"
              data-bs-target="#carouselExampleIndicators4"
              :data-bs-slide-to="slideIndex"
              :class="{ active: slideIndex === 0 }"
            ></li>
          </ol>
          <div class="carousel-inner h-25">
            <div
              v-for="(slide, slideIndex) in $store.state.dataMen"
              :key="slideIndex"
              class="carousel-item"
              :class="{ active: slideIndex === 0 }"
            >
              <img :src="slide.thumbnail" :alt="slide.alt" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators4"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators4"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </router-link>
    <router-link to="/women" v-slot="{ navigate5 }">
      <div @click="navigate5">
        <h2>women</h2>
        <div
          id="carouselExampleIndicators5"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(slide, slideIndex) in $store.state.dataWomen"
              :key="slideIndex"
              data-bs-target="#carouselExampleIndicators5"
              :data-bs-slide-to="slideIndex"
              :class="{ active: slideIndex === 0 }"
            ></li>
          </ol>
          <div class="carousel-inner h-25">
            <div
              v-for="(slide, slideIndex) in $store.state.dataWomen"
              :key="slideIndex"
              class="carousel-item"
              :class="{ active: slideIndex === 0 }"
            >
              <img :src="slide.thumbnail" :alt="slide.alt" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators5"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators5"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </router-link>
    <router-link to="/children" v-slot="{ navigate6 }">
      <div @click="navigate6">
        <h2>children</h2>
        <div
          id="carouselExampleIndicators6"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(slide, slideIndex) in $store.state.dataChildren"
              :key="slideIndex"
              data-bs-target="#carouselExampleIndicators6"
              :data-bs-slide-to="slideIndex"
              :class="{ active: slideIndex === 0 }"
            ></li>
          </ol>
          <div class="carousel-inner h-25">
            <div
              v-for="(slide, slideIndex) in $store.state.dataChildren"
              :key="slideIndex"
              class="carousel-item"
              :class="{ active: slideIndex === 0 }"
            >
              <img :src="slide.thumbnail" :alt="slide.alt" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators6"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators6"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      carousels: [
        this.$store.state.dataProductes,
        this.$store.state.dataPhones,
        this.$store.state.dataLaptops,
        this.$store.state.dataFragrances,
        this.$store.state.dataSkincare,
        this.$store.state.dataGroceries,
        this.$store.state.dataHomeDecoration,
      ],
    };
  },
  methods: {
    nextProduct() {
      this.currentIndex++;
      if (this.currentIndex >= this.products.length) {
        this.currentIndex = 0;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  a {
    text-decoration: none;
    > div {
      height: 80vh;
      width: 100%;
      h2 {
        font-weight: bold;
        text-transform: capitalize;
      }
      > div {
        background-color: #ccc;
        ol {
          list-style: none;
        }
        > div {
          height: 100%;
          width: 60vw;
          > div {
            height: 100%;
            width: 100%;
            object-fit: cover;
            overflow: hidden;
            img {
              height: 50vh;
              width: 100%;
            }
          }
        }
        a {
          span {
            background-color: #aaa;
            border-radius: 8px;
          }
        }
      }
    }
  }
}

// @media (min-width: 600px) {
//   .carousel-item {
//     width: 70%;
//   }
// }
</style>
