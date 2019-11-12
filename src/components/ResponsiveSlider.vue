<template>
  <div class="wrapper">
    <h1 class="text-center">{{ label }}</h1>
    <v-layout row>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in data" :key="index">
          <v-card dark color="transparent" class="mr-3 card">
            <v-img :src="item.featuredImage" class="card-img"></v-img>
            <v-card-text v-if="item.title">
              <h3>{{item.title}}</h3>
            </v-card-text>
          </v-card>
        </swiper-slide>
      </swiper>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    label: "",
    data: {}
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        breakpoints: {
          576: {
            slidesPerView: 1.2
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.wrapper {
  margin-bottom: 48px;
}
h1 {
  margin-bottom: 24px;
  text-align: center;
}
h3 {
  font-size: 20px;
  color: #ffffff;
}

.swiper-slide {
  width: 80%;
}
.swiper-slide:nth-child(2n) {
  width: 60%;
}
.swiper-slide:nth-child(3n) {
  width: 40%;
}
.card {
  min-height: 250px;
}
.card-img {
  max-height: 250px;

}
</style>
