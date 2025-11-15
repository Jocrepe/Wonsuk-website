<script setup>
import UserLayout from '@/components/user/UserLayout.vue';

import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()

const showPopup = ref(false)


const checkLoggedIn = (path) => {
  const check = localStorage.getItem('LoggedIn')
  if (check) {
    showPopup.value = false
    router.push(path)
  } else {
    showPopup.value = true
  }
}


</script>

<template>
  <UserLayout>
  <div v-if="showPopup" class="flex items-center justify-center fixed inset-0 z-10 bg-black/70">
      <div class="relative flex items-center flex-col bg-warning-content  rounded-xl">
        <div @click="showPopup = false" class="absolute top-10 left-10 cursor-pointer"><p class="text-4xl">x</p></div>
        <p class="text-6xl px-30 py-30">Please Log in first !</p>
        <RouterLink to="/login" class="w-full flex justify-center"><button class="btn btn-success w-1/2 p-10 mb-10"><p class="text-xl">Log In</p></button></RouterLink>
      </div>
    </div>


    <div class="overflow-hidden w-full relative">
      <div class="absolute z-0  w-200 h-200 shadow-xl rounded-full lg:[bottom:500px] lg:[right:550px] 2xl:[bottom:500px] 2xl:[right:900px]"></div>
      <div class="absolute z-0  w-200 h-200 shadow-xl rounded-full lg:[bottom:450px] lg:[left:800px] 2xl:[bottom:350px] 2xl:[left:1200px]"></div>

      <div class="flex mb-30">
        <div class="w-1/3 p-20">
          <img src="@/assets/background/world-humanitarian-day 1.png" alt="">
        </div>
        <div class="w-2/3 p-4">
          <p class="lg:text-4xl 2xl:text-5xl mt-40">"แบ่งปันของที่มีคุณค่า</p>
          <p class="lg:text-4xl 2xl:text-5xl ml-70 mt-10">ให้หมุนอย่างอบอุ่น"</p>
        </div>
      </div>

      <!-- button -->
      <div class="flex justify-center items-center  mb-40 lg:gap-10 2xl:gap-20">
        <div class="flex justify-center items-center">
            <button class=" btn btn-outline btn-success flex flex-col w-70 h-70 rounded-xl" @click="checkLoggedIn('/repair')">
              <img src="@/assets/icon/repiar.png" alt="" class="">
              <p class="text-3xl mt-5">ซ่อมแซม</p>
            </button>
        </div>
        <div class="flex justify-center items-center">
          <button class="btn btn-outline btn-success flex flex-col w-70 h-70 rounded-xl" @click="checkLoggedIn('/exchange')">
            <img src="@/assets/icon/exchange.png" alt="" class="">
            <p class="text-3xl mt-5">แลกเปลี่ยน</p>
          </button>
        </div>
        <div class="flex justify-center items-center">
          <button class="btn btn-outline btn-success flex flex-col w-70 h-70 rounded-xl">
            <img src="@/assets/icon/commu.png" alt="" class="">
            <p class="text-3xl mt-5">ชุมชน</p>
          </button>
        </div>
      </div>

    </div>
  </UserLayout>
</template>

