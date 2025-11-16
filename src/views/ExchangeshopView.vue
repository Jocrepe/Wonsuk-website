<script setup>
import UserLayout from '@/components/user/UserLayout.vue';
import Back from '@/components/user/Back.vue';

import { useContactStore } from '@/stores/contact';

const contact = useContactStore()

</script>

<template>
  <UserLayout>
    <RouterLink to="/exchange">
      <div class="w-8 h-8 absolute cursor-pointer lg:[top:170px] lg:[left:50px] 2xl:[top:170px] 2xl:[left:350px]">
        <Back></Back>
      </div>
    </RouterLink>

    <div class="flex mt-10">
      <div class=" w-1/2 p-20 ml-20">
        <img :src="contact.item[0]?.imageUrl" alt="" class="w-full">

      </div>
      <div class="flex flex-col w-1/2 p-20 bg-warning-content rounded-xl">
        <div class="">
          <p class="text-3xl text-center text-black">{{ contact.item[0]?.name }}</p>
          <p class="text-xl text-black mt-10 text-center">{{ contact.item[0]?.about }}</p>
        </div>
        <div class="flex mt-10">
          <img src="@/assets/icon/man.png" alt="" class="w-7 h-7">
          <p class="ml-3 text-black">{{ contact.item[0]?.seller }}</p>
        </div>
        <div class="flex ml-10">
          <p class="">
            {{ contact.item[0]?.reviewscore }}
          </p>
          <img src="@/assets/icon/star.png" alt="" class="w-5 h-5 ml-3">
        </div>

      </div>
    </div>
    <div class="flex w-full justify-center mb-15 mt-15">
      <div class="flex w-1/2 justify-center">
        <button class="btn btn-success p-20 text-3xl ml-30 rounded-xl"><p>แลกเปลี่ยน</p></button>
      </div>
      <div class="w-1/2 flex justify-center">
        <button class="btn btn-accent p-20 text-3xl rounded-xl"><p>ซื้อ</p></button>
      </div>

    </div>


  </UserLayout>
</template>
