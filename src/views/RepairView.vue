<script setup>
import UserLayout from '@/components/user/UserLayout.vue';
import Back from '@/components/user/Back.vue';
</script>

<template>
  <UserLayout>
    <RouterLink to="/">
      <div class="w-8 h-8 absolute top-45 left-50 cursor-pointer">
        <Back></Back>
      </div>
    </RouterLink>
    <div class="w-full flex justify-center items-center mb-15">
      <div class="w-70 h-25  text-center ">
        <p class="text-5xl text-base-content  mt-10">ซ่อมแซม</p>
      </div>
    </div>

    <!-- button -->
    <div class="flex w-full justify-center items-center gap-20 mb-30">
      <div class="flex justify-center items-center">
        <RouterLink to="/findservice">
          <button class="btn btn-soft w-[399px] h-[465px] flex flex-col">
            <img src="@/assets/icon/ช่างอาสา.png" alt="" class="">
            <p class="text-xl mt-1 ">รวมบริการช่างอาสา</p>
            <p class="text-md mt-2 mb-5">
              เพราะงานช่างคุณภาพเป็นสิ่งสำคัญ<br>สำหรับบ้านสวยและน่าอยู่<br>บ้านและสวน รวมบริการงานช่าง
            </p>
          </button>
        </RouterLink>


      </div>
      <div class="flex justify-center items-center">
        <RouterLink to="/repairshop">
          <button class="btn btn-soft w-[399px] h-[465px] flex flex-col">
            <img src="@/assets/icon/ร้านซ่อม.png" alt="" class="">
            <p class="text-xl mt-1 ">ร้านซ่อม</p>
            <p class="text-md mt-2 mb-5">
              ไม่ต้องไปไกล! รวมร้านซ่อมคุณภาพ<br>ในละแวกบ้าน บริการรวดเร็ว ราคามิตรภาพ
              <br>พร้อมคำแนะนำจากช่างมืออาชีพ
            </p>
          </button>
        </RouterLink>
      </div>
      <div class="flex justify-center items-center">
        <button class="btn btn-soft w-[399px] h-[465px] flex flex-col">
          <img src="@/assets/icon/แจ้งของที่อยากซ่อม.png" alt="" class="">
          <p class="text-xl mt-1 ">แจ้งของที่อยากซ่อม</p>
          <p class="text-md mt-2 mb-5">
            ระบบรับแจ้งงานซ่อมครบวงจร<br>ระบุของที่ต้องการซ่อมแล้วทีม
            <br>ช่างผู้เชี่ยวชาญจะติดต่อกลับทันที
          </p>
        </button>
      </div>

    </div>


  </UserLayout>
</template>
