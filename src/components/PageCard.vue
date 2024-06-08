<template>
  <div class="card" :key="product.id">
    <router-link
      :to="{
        path: '/product',
        query: {
          title: product.title,
          thumbnail: product.thumbnail,
          category: product.category,
          description: product.description,
          desc: product.discountPercentage,
          images: product.images,
          price: product.price,
          rating: product.rating,
        },
      }"
    >
      <div class="image">
        <img class="w-100 h-100" id="photo" :src="product.thumbnail" />
      </div>
      <h3 class="">{{ product.title }}</h3>
    </router-link>
    <div class="content">
      <ul class="color row gap-2 mt-2">
        <li v-for="image in product.images" :key="image.index">
          <img :src="image" alt="" @click="changeImage(image)" />
        </li>
      </ul>
      <div class="d-flex justify-content-between align-items-center w-100">
        <span>stock</span>
        <b v-if="textStock !== ''">{{ textStock }}</b>
        <b v-else>{{ product.stock }}</b>
      </div>
      <div class="price" v-if="desc">
        <del>{{ product.price.toFixed(1) + "ج.م" }}</del>
        <b>{{
          Math.round(product.price - product.discountPercentage).toFixed(1) +
          " ج.م"
        }}</b>
      </div>
      <div class="price" v-else>
        <b>{{ product.price.toFixed(1) + " ج.م" }}</b>
      </div>

      <button
        type="button"
        v-if="this.$store.state.userLogin.name != ''"
        @click="
          addToCart(product) |
            this.$store.commit('CountShoping') |
            addTextStock()
        "
      >
        {{ textButton || "enroll" }}
      </button>

      <button type="button" v-else>
        <router-link to="/login">{{ "enroll" }}</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "desc"],
  name: "ProductCard",
  data() {
    return {
      theData: this.$store.state.dataShoping,
      textStock: "",
      textButton: "",
    };
  },
  mounted() {
    // استدعاء الدالة عند تركيب المكون في الصفحة
    this.addTextStock();
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    // ********
    changeImage(image) {
      // eslint-disable-next-line vue/no-mutating-props
      this.product.thumbnail = image;
    },
    addTextStock() {
      let theStock = this.theData.find((e) => e.id == this.product.id);
      if (theStock) {
        this.textStock = theStock.stock;
        this.textButton = theStock.quantity;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  height: 50vh;
  padding: 5px;
  overflow: hidden;
  background-color: #ccc;
  gap: 0;

  position: relative;
  a {
    width: 100%;
    height: 400px;
    overflow: hidden;
    text-decoration: none;
    margin-bottom: 10px;
    .image {
      overflow: hidden;
      height: 70%;
      object-fit: cover;
      transition: transform 0.5s linear;
      position: relative;
      img {
        height: 100%;
      }
      &:hover {
        position: absolute;
        top: 5px;
        left: 0;
        width: 100%;
        // height: 86%;
        transform: scaleY(1.1);
        z-index: 777;
        background-color: rgba(255, 255, 255, 0.4); /* لون الخلفية مع شفافية */
        backdrop-filter: blur(10px); /* تأثير الضبابية */
      }
    }
    h3 {
      padding-top: 5px;
      padding-bottom: 5px;
      font-weight: bold;
      height: 20%;
    }
  }

  .content {
    width: 100%;
    // height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;

    h3 {
      width: 100%;
      text-wrap: nowrap;
      font-size: 20px;
      font-weight: bold;
      overflow: hidden;
    }

    .color {
      position: relative;
      display: flex;
      gap: 2px;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      width: 100%;
      height: 30px;
      list-style: none;

      li {
        position: relative;
        width: 15%;
        height: 100%;
        border: 0.5px solid #000;
        object-fit: cover;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      width: 100%;
      font-size: 1.2rem;
      del {
        color: red;
      }
    }

    button {
      background: linear-gradient(
        135deg,
        rgba(0, 255, 0) 50%,
        rgba(0, 255, 0, 0.342) 50%
      );
      border: 1px dotted;
      border-radius: 8px;
      font-weight: bold;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 550px) {
  .card {
    width: 100%;
  }
}

@media (min-width: 551px) and (max-width: 750px) {
  .card {
    width: 45%;
  }
}

@media (min-width: 751px) and (max-width: 1100px) {
  .card {
    width: 25%;
  }
}

@media (min-width: 1101px) {
  .card {
    width: 20%;
  }
}
</style>
,
