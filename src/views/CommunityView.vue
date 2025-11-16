<script setup>

import UserLayout from '@/components/user/UserLayout.vue';
import Back from '@/components/user/Back.vue';

import { useCommunityStore } from '@/stores/community';
import { ref } from 'vue';

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


const community = useCommunityStore()

const comments = ref({})

const text = ref({})

const send = (slideId) => {
  if (!text.value[slideId].trim()) return

  if (!comments.value[slideId]) comments.value[slideId] = []

  comments.value[slideId].push({
    id: Date.now(),
    text: text.value[slideId],
    sender: 'me'
  })

  // เก็บลง localStorage
  localStorage.setItem('comments', JSON.stringify(comments.value))

  text.value[slideId] = ''
}

// โหลด comment จาก localStorage
if (localStorage.getItem('comments')) {
  comments.value = JSON.parse(localStorage.getItem('comments'))
}

</script>

<template>
  <UserLayout>
    <RouterLink to="/">
      <div class="w-8 h-8 absolute cursor-pointer lg:[top:170px] lg:[left:50px] 2xl:[top:170px] 2xl:[left:350px]">
        <Back></Back>
      </div>
    </RouterLink>

    <div class="w-full mt-30">
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
        <swiper-slide v-for="i in community.list" :key="i.id">
            <div class="flex flex-col w-full h-full bg-base-300 cursor-pointer">
              <div class="w-full ">
                <img :src="i.imageUrl" alt="" class=" w-full  p-10" >
              </div>
              <div class="flex w-full ml-10">
                <div class="w-1/4 w-15 h-15 lg:mr-5">
                  <img src="@/assets/icon/man.png" alt="">
                </div>
                <div class="flex flex-col w-3/4 lg:items-start 2xl:items-start">
                  <div class="w-60 flex ">
                    <p class="lg:text-xl 2xl:text-3xl">{{ i.name }}</p>
                  </div>
                  <div class="lg:">
                    <p class="tlg:text-xl 2xl:text-3xl">{{ i.reviewscore }} / 5.0</p>
                  </div>
                </div>
              </div>

              <div class="w-full h-40 lg:h-60">
                <p class="text-xl p-10">{{ i.about }}</p>
              </div>
              <div class="w-full border mb-5"></div>

              <div class="w-full lg:p-5">
                <textarea v-model="text[i.id]" class="text-xl textarea rounded-xl p-5" placeholder="Comment..."></textarea>
                <button @click="send(i.id)" class="btn btn-primary ml-5"><p>Post</p></button>
              </div>

              <div class="flex-1 overflow-y-auto mb-4 space-y-2 p-4 bg-base-200 rounded-xl h-full mx-5 ">
                <div v-for="m in comments[i.id] || []" :key="m.id" class="flex justify-center">
                  <div class="flex items-center bg-base-300 text-black px-4 py-2 rounded-xl max-w-xs">
                    <div class="w-15 h-15 m-5">
                      <img src="@/assets/icon/man.png" alt="">
                    </div>
                    <div class>
                      <p>{{ m.text }}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

        </swiper-slide>

      </swiper>

      <p class="append-buttons"></p>
    </div>
  </UserLayout>
</template>

<style scoped>

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
  height: 1000px;
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
