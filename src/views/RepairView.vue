<script setup>
import UserLayout from '@/components/user/UserLayout.vue';
import Back from '@/components/user/Back.vue';
</script>

<template>
  <UserLayout>
    <RouterLink to="/">
      <div class="w-8 h-8 absolute cursor-pointer lg:[top:170px] lg:[left:50px] 2xl:[top:170px] 2xl:[left:350px]">
        <Back></Back>
      </div>
    </RouterLink>
    <div class="w-full flex justify-center items-center mb-15">
      <div class="w-70 h-25  text-center ">
        <p class="text-base-content  mt-10 lg:text-4xl 2xl:text-5xl">ซ่อมแซม</p>
      </div>
    </div>

    <!-- button -->
    <div class="flex w-full justify-center items-center mb-30 lg:gap-5 2xl:gap-20">
      <div class="flex justify-center items-center">
        <RouterLink to="/findservice">
          <button class="btn btn-soft flex flex-col lg:w-[250px] lg:h-[465px] 2xl:w-[399px] 2xl:h-[465px]">
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
          <button class="btn btn-soft flex flex-col lg:w-[250px] lg:h-[465px] 2xl:w-[399px] 2xl:h-[465px]">
            <img src="@/assets/icon/ร้านซ่อม.png" alt="" class="">
            <p class="text-xl mt-1 ">ร้านซ่อม</p>
            <p class="text-md mt-2">
              ไม่ต้องไปไกล! รวมร้านซ่อมคุณภาพ<br>ในละแวกบ้าน บริการรวดเร็ว ราคามิตรภาพ
              <br>พร้อมคำแนะนำจากช่างมืออาชีพ
            </p>
          </button>
        </RouterLink>
      </div>
      <div class="flex justify-center items-center">
        <RouterLink to="/reportfix">
          <button class="btn btn-soft flex flex-col lg:w-[250px] lg:h-[465px] 2xl:w-[399px] 2xl:h-[465px]">
          <img src="@/assets/icon/แจ้งของที่อยากซ่อม.png" alt="" class="">
          <p class="text-xl mt-1 ">แจ้งของที่อยากซ่อม</p>
          <p class="text-md mt-2 mb-5">
            ระบบรับแจ้งงานซ่อมครบวงจร<br>ระบุของที่ต้องการซ่อมแล้วทีม
            <br>ช่างผู้เชี่ยวชาญจะติดต่อกลับทันที
          </p>
        </button>

        </RouterLink>
      </div>

    </div>


  </UserLayout>
</template>
