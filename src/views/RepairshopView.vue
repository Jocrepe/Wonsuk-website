<script setup>
import UserLayout from '@/components/user/UserLayout.vue';
import Repairshop from '@/components/user/Repairshop.vue';
import Back from '@/components/user/Back.vue';

import { useRepairshopStore } from '@/stores/repairshop';
import { useContactStore } from '@/stores/contact';

const repairshopStore = useRepairshopStore()
const contact = useContactStore()

const addToContact = (repairshop) => {
  console.log("asdda")
  console.log(repairshop)
  contact.addToitem(repairshop)
}
</script>

<template>
  <UserLayout>
    <RouterLink to="/repair">
      <div class="w-8 h-8 absolute top-45 left-50 cursor-pointer">
        <Back></Back>
      </div>
    </RouterLink>

    <div class="w-full flex justify-center items-center mb-15">
      <div class="w-full h-25  text-center ">
        <p class="text-5xl text-base-content  mt-15">ร้านซ่อมใกล้ฉัน</p>
      </div>
    </div>

    <Repairshop :repairshops="repairshopStore.list" :addToContact="addToContact"></Repairshop>

  </UserLayout>
</template>
