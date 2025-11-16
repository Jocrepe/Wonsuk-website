<script setup>

import UserLayout from '@/components/user/UserLayout.vue';

import { useExchangeStore } from '@/stores/exchange';

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../style.css';

  // import required modules
import { Navigation, Pagination } from 'swiper/modules';

const modules = [Navigation, Pagination];

const exchange = useExchangeStore()

</script>

<template>
  <UserLayout>
    <div class="w-full bg-[#91FF91]">
      <div class="flex ">
        <div class="w-1/2">
          <img src="@/assets/icon/exchange1.png" alt="">
        </div>
        <div class="flex flex-col w-1/2">
          <div class="w-full text-center mt-15">
            <p class="text-5xl text-[#FFFFFF]">
              หน้าสินค้าแลกเปลี่ยน
            </p>
          </div>
          <div class="w-full flex justify-center mt-15">
            <label class="input text-2xl h-17 w-100">
              <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>

          </div>

        </div>

      </div>
    </div>

    <div class="w-full">
      <swiper
        ref="{swiperRef}"
        :slidesPerView="3"
        :centeredSlides="true"
        :spaceBetween="30"
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="i in exchange.list"><img :src="i.imageUrl" alt="" class="cursor-pointer"></swiper-slide>
     
      </swiper>

      <p class="append-buttons"></p>
    </div>

    
  </UserLayout>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin: 20px auto;
}
.append-buttons {
  text-align: center;
  margin-top: 20px;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
}
</style>
