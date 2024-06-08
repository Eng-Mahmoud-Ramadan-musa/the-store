<template>
  <div class="man">
    <div class="">
      <input
        type="text"
        class="form-control container mb-3"
        placeholder="Enter an uploader"
        v-model="searchedUploader"
      />
    </div>
    <div class="con">
      <product-card
        v-for="product in filtered"
        :key="product.index"
        :product="product"
        :desc="true"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/PageCard.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "search-page",
  data() {
    return {
      searchedUploader: "",
    };
  },
  components: {
    ProductCard,
  },
  methods: {
    ...mapActions(["fetchUploaders"]),

    created() {
      this.fetchUploaders();
    },
  },
  computed: {
    ...mapGetters(["consumerUploaders", "filteredUploaders"]),
    filtered() {
      return this.filteredUploaders(this.searchedUploader);
    },
  },
};
</script>

<style lang="scss" scoped>
.man {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 20px;
  > div:first-child {
    width: 70%;
    position: absolute;
    top: 10px;
    z-index: 1000;
  }
  .con {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
}
</style>
