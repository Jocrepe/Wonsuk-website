<script setup>
import { useContactStore } from '@/stores/contact';
import { ref } from 'vue';

import UserLayout from '@/components/user/UserLayout.vue';
import Back from '@/components/user/Back.vue';

const contact = useContactStore()
const text = ref('')
const messages = ref([])

const send = () => {
  if (!text.value.trim()) return

  // เพิ่มข้อความฝั่งเรา
  messages.value.push({
    id: Date.now(),
    text: text.value,
    sender: "me"
  })

  text.value = "" // ล้างช่องพิมพ์
}

</script>

<template>
  <UserLayout>
    <div class="flex w-full mb-50 gap-10 mt-10">
      <div class=" flex flex-col text-center items-center bg-success-content	">
        <RouterLink to="/repairshop">
          <div class="w-8 h-8 absolute top-47 left-55 cursor-pointer">
            <Back></Back>
          </div>
        </RouterLink>
        <img :src="contact.item[0]?.imageUrl" alt="" class="w-80 mt-20">
        <div>
          <p class="text-2xl mt-10">{{ contact.item[0]?.name }}</p>
        </div>
        <div class="flex ml-19 mt-5">
          <p class="w-47 text-xl">Review : {{ contact.item[0]?.reviewscore }} / 5.0</p>
          <img src="@/assets/icon/star.png" alt="" class="w-5 h-5 mr-80">
        </div>
        <div>
          <p class="text-xl mt-10 pb-10">open: {{ contact.item[0]?.open }}</p>
        </div>
      </div>

      <div class="w-full">

        <!-- กล่องข้อความ -->
        <div class="flex-1 overflow-y-auto mb-4 space-y-2 p-4 bg-base-200 rounded-xl h-full">
          <div v-for="m in messages" :key="m.id" class="flex"
            :class="m.sender === 'me' ? 'justify-end' : 'justify-start'">
            <div class="bg-blue-400 text-white px-4 py-2 rounded-xl max-w-xs">
              {{ m.text }}
            </div>
          </div>
        </div>

        <!-- ช่องพิมพ์ข้อความ -->
        <div class="flex gap-3">
          <input v-model="text" type="text" placeholder="พิมพ์ข้อความ..." class="input input-bordered w-full"
            @keyup.enter="send" />
          <button @click="send" class="btn btn-primary">ส่ง</button>
        </div>

      </div>

    </div>
  </UserLayout>
</template>
