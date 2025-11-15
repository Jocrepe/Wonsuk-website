<script setup>
import UserLayout from '@/components/user/UserLayout.vue';

import { RouterLink } from 'vue-router';

</script>

<template>
  <UserLayout>
    <div class="overflow-hidden w-full relative">
      <div class="absolute z-0 bottom-140 right-200 w-200 h-200 shadow-xl rounded-full "></div>
      <div class="absolute z-0 bottom-70 left-300 w-200 h-200 shadow-xl rounded-full "></div>

      <div class="flex mb-30">
        <div class="w-1/3 p-20">
          <img src="@/assets/background/world-humanitarian-day 1.png" alt="">
        </div>
        <div class="w-2/3 p-4">
          <p class="text-5xl mt-40">"แบ่งปันของที่มีคุณค่า</p>
          <p class="text-5xl ml-70 mt-10">ให้หมุนอย่างอบอุ่น"</p>
        </div>
      </div>

      <!-- button -->
      <div class="flex justify-center items-center gap-20 mb-40">
        <div class="flex justify-center items-center">
          <RouterLink to="/repair">
            <button class=" btn btn-outline btn-success flex flex-col w-70 h-70 rounded-xl">
              <img src="@/assets/icon/repiar.png" alt="" class="">
              <p class="text-3xl mt-5">ซ่อมแซม</p>
            </button>
          </RouterLink>
        </div>
        <div class="flex justify-center items-center">
          <button class="btn btn-outline btn-success flex flex-col w-70 h-70 rounded-xl">
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

        <!-- button -->


      </div>

    </div>
  </UserLayout>
</template>

<style>
p {
  font-family: 'kanit';
}
</style>
