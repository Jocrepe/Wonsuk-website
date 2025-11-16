<script setup>
import UserLayout from '@/components/user/UserLayout.vue';


</script>

<template>
  <UserLayout>
    <div class="flex">
      <div class=" w-1/2 p-20 ml-20">
        <img src="@/assets/icon/bag.png" alt="w-full">

      </div>
      <div class="flex flex-col w-1/2 p-20">
        <div>
          <p class="text-3xl text-center text-black">กระเป๋าสานเส้นพลาสติก</p>
          <p class="text-xl text-black mt-10">งานฝีมือ ทำเองช่วงโควิด อยากส่งต่อกระเป๋านี้ให้คนที่ได้ใช้งาน
            <br>เพราะไม่มีโอกาสได้ใช้เลย แลกเปลี่ยนได้ ซื้อได้ค่ะ
          </p>
        </div>
        <div class="flex mt-10">
          <img src="@/assets/icon/man.png" alt="" class="w-7 h-7">
          <p class="ml-3 text-black">สีนวล เองจ้า</p>
        </div>
        <div class="flex ml-10">
          <p class=" ">
            4.5
          </p>
          <img src="@/assets/icon/star.png" alt="" class="w-5 h-5 ml-3">
        </div>

      </div>
    </div>
    <div class="flex justify-center mb-15">
      <div class="w-1/2 ">
        <button class="btn btn-success p-20 text-3xl ">แลกเปลี่ยน</button>
      </div>
      <div class="">
        <button class="btn btn-accent p-20 text-3xl ">ซื้อ</button>
      </div>

    </div>


  </UserLayout>
</template>
