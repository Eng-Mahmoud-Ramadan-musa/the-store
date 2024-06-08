<template>
  <div>
    <div class="row">
      <product-card
        v-for="product in $store.state.thisHuors"
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
  name: "huors-page",
  data: function () {
    return {};
  },
  components: {
    ProductCard,
  },
};
</script>
<style lang="scss" scoped></style>
