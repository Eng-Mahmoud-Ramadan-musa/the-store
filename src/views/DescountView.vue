<template>
  <div class="div">
    <div class="counter">
      <table>
        <thead>
          <td>deys</td>
          <td>hours</td>
          <td>minutes</td>
          <td>seconds</td>
        </thead>
        <tbody>
          <td>{{ this.days }}</td>
          <td>{{ this.hours }}</td>
          <td>{{ this.minutes }}</td>
          <td>{{ this.seconds }}</td>
        </tbody>
      </table>
    </div>
    <div class="row">
      <product-card
        v-for="product in $store.state.dataProductes"
        :key="product.index"
        :product="product"
        :desc="true"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/PageCard.vue";
export default {
  name: "desc-page",
  data: function () {
    return {
      discountEndDate: new Date("2024-06-30"),
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  components: {
    ProductCard,
  },
  created() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    updateCountdown() {
      const currentTime = new Date();
      const timeDiff = this.discountEndDate - currentTime;

      if (timeDiff > 0) {
        this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        this.minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        this.seconds = Math.floor((timeDiff / 1000) % 60);

        // this.countdown = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      } else {
        this.countdown = "Discount expired";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.div {
  width: 90%;
  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    table {
      color: #fff;
      background-color: red;
      thead {
        font-size: 1.2rem;
        font-weight: bold;
      }
      tbody {
        font-size: 1rem;
        font-weight: bold;
        background-color: #bbb;
        color: #222;
      }
      td {
        padding: 5px 10px;
        border: 1px solid;
      }
    }
  }
}
</style>
