<template>
  <div id="ward-swiper" class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <span class="img"><img src="@/assets/howto_ward1.png" alt="" /></span>
      </div>
      <div class="swiper-slide">
        <span class="img"><img src="@/assets/howto_ward2.png" alt="" /></span>
      </div>
      <div class="swiper-slide">
        <span class="img"><img src="@/assets/howto_ward3.png" alt="" /></span>
      </div>
      <div class="swiper-slide">
        <span class="img"><img src="@/assets/howto_ward4.png" alt="" /></span>
      </div>
      <div class="swiper-slide">
        <span class="img"><img src="@/assets/howto_ward5.png" alt="" /></span>
      </div>
      <div class="swiper-slide">
        <span class="img"><img src="@/assets/howto_ward6.png" alt="" /></span>
      </div>
      <div class="swiper-slide">
        <span class="img"><img src="@/assets/howto_ward7.png" alt="" /></span>
      </div>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core"
import { makeSwiper } from "@/utils"

export default {
  name: "WardSwiper",
  setup() {
    onMounted(() => {
      const swiperOpts = {
        centeredSlides: true, //항상 가운데 배치됌
        //////////////////swiper 초기화 - 필수 //////////////////////////
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
      makeSwiper("#ward-swiper", swiperOpts)
    })
    return {}
  },
}
</script>
<style lang="scss" scoped>
.swiper-slide {
  text-align: center;
  .img {
    width: 360px;
    margin: 0 auto;
  }
}
</style>
