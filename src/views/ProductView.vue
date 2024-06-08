<template>
  <div class="div">
    <div class="close" @click="cancelProductView()">x</div>
    <div class="frist">
      <h2>{{ $route.query.title }}</h2>
      <div class="img"><img class="w-100 h-100" :src="thumbnail" alt="" /></div>
    </div>
    <div class="secound">
      <div class="category"><b>category:</b> {{ $route.query.category }}</div>
      <div class="price"><b>price:</b> {{ $route.query.price }} ج.م</div>
      <div class="desc"><b>Descount:</b> {{ $route.query.desc }} %</div>
      <ul class="images">
        <li v-for="(image, index) in $route.query.images" :key="index">
          <img
            :src="image"
            :alt="$route.query.title"
            @click="changeImage(image)"
          />
        </li>
      </ul>
      <p class="description">
        <b>description:</b> {{ $route.query.description }}
      </p>
      <div class="rating">
        <p><b>تقييم المستخدم:</b> {{ $route.query.rating }}/5</p>
        <p><b>النسبة المئوية:</b> {{ userRatingPercentage.toFixed(1) }}%</p>
        <div class="star-rating">
          <span
            v-for="star in 5"
            :key="star"
            :class="{ filled: star <= $route.query.rating }"
          >
            ★
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-view",
  data() {
    return {
      thumbnail: this.$route.query.thumbnail, // قيمة الصورة الأصلية
      userRatingPercentage: 0,
    };
  },
  mounted() {
    this.calculateUserRatingPercentage();
  },
  methods: {
    changeImage(image) {
      // eslint-disable-next-line vue/no-mutating-props
      this.thumbnail = image;
    },
    calculateUserRatingPercentage() {
      this.userRatingPercentage = (this.$route.query.rating / 5) * 100;
    },
    cancelProductView() {
      history.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.div {
  height: 100%;
  width: 90%;
  background-color: #ddd;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 20px;
  position: relative;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: #888;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    padding: 5px;
    cursor: pointer;
    z-index: 555;
  }
  .frist {
    position: relative;
    overflow: hidden;
    height: 55vh;
    align-items: center;
    h2 {
      font-weight: bold;
    }
    .img {
      height: 90%;
      width: 100%;
      object-fit: cover;
      img {
        display: inline-block;
        height: 90%;
        width: 90%;
      }
    }
  }
  .secound {
    overflow: hidden auto;
    align-items: start;
    padding-left: 5%;
    padding-right: 5px;
    padding-top: 10px;
    div,
    p {
      background: linear-gradient(20deg, #ddd 40%, #888);
      border: 0.5px solid #ccc;
      padding-inline: 10px;
    }
    .images {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 5px;
      width: 100%;
      height: 150px;
      list-style: none;
      li {
        width: 100px;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 8px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .rating {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      .star-rating {
        color: #f8f8f5; /* تغيير لون النجوم إلى الذهبي */
        font-size: 24px; /* تغيير حجم النجوم */
      }

      .star-rating .filled {
        color: #ffd700; /* تغيير لون النجوم الممتلئة */
      }
    }
  }
}
@media (max-width: 700px) {
  .div {
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    overflow: auto;
    gap: 80px;
  }
}
</style>
