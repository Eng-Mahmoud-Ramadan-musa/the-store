<template>
  <div>
    <div class="row">
      <product-card
        v-for="product in $store.state.dataPhones"
        :key="product.index"
        :product="product"
        :desc="false"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/PageCard.vue";
export default {
  name: "smart-phones",
  data: function () {
    return {};
  },
  components: {
    ProductCard,
  },
};
</script>
<style>
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-left: 20px;
}
</style>
