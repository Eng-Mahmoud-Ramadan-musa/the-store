<template>
  <ul class="d-flex flex-column gap-2">
    <li
      v-for="(product, index) in this.$store.state.dataShoping"
      :key="product.index"
      :product="product"
      :desc="false"
      class="d-flex justify-content-between align-items-center w-100 overflow-hidden h-25"
    >
      <img :src="product.thumbnail" alt="" />
      <span>{{ product.price }}</span>
      <span>
        <button @click="mins(index) | this.$store.commit('CountShoping')">
          -
        </button>
        {{ product.quantity }}
        <button @click="plus(index) | this.$store.commit('CountShoping')">
          +
        </button>
      </span>
      <span>{{ product.price * product.quantity }}</span>
      <button
        class="text-bg-danger p-0 border-white"
        type="button"
        @click="removeItem(index) | this.$store.commit('CountShoping')"
      >
        <span class="material-symbols-outlined fs-1"> delete </span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "shoping-view",
  data: function () {
    return {
      myData: this.$store.state.dataShoping,
      shopingUser: this.$store.state.userLogin,
    };
  },
  methods: {
    removeItem(index) {
      this.myData.splice(index, 1);
      localStorage.productShoping = JSON.stringify(this.myData);
    },
    plus(index) {
      if (
        this.myData[index].stock + this.myData[index].quantity >
        this.myData[index].quantity
      ) {
        this.myData[index].quantity++;
        this.myData[index].stock--;
        localStorage.productShoping = JSON.stringify(this.myData);
      } else {
        alert("no product");
      }
    },
    mins(index) {
      if (this.myData[index].quantity > 1) {
        this.myData[index].quantity--;
        this.myData[index].stock++;
      } else {
        this.myData[index].quantity = 1;
      }
      localStorage.productShoping = JSON.stringify(this.myData);
    },
    //     checkUserShoping() {
    // let data = this.myData.find((el) => )
    //     }
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 70%;
  margin: auto;
  li {
    padding: 5px 10px;
    border: 1px solid;
    border-radius: 8px;
    img {
      width: 100px;
      height: 100px;
      border: 1px dotted;
      border-radius: 8px;
    }
  }
}
button {
  border-radius: 50%;
}
@media (max-width: 800px) {
  ul {
    width: 100%;
    margin: auto;
    padding: 5px 10px;

    li {
      padding: 5px 10px;
      border: 1px solid;
      border-radius: 8px;
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>
