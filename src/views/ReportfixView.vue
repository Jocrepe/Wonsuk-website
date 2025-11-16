<script setup>
import UserLayout from '@/components/user/UserLayout.vue';
import Back from '@/components/user/Back.vue';

import { ref } from 'vue';

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
    <RouterLink to="/repair">
      <div class="w-8 h-8 absolute cursor-pointer lg:[top:170px] lg:[left:50px] 2xl:[top:170px] 2xl:[left:350px]">
        <Back></Back>
      </div>
    </RouterLink>
    <div class="mt-10">
      <p class="text-black text-5xl text-center">
        แจ้งของที่อยากซ่อม
      </p>

    </div>
    <div class="w-full h-170 mt-10 mb-20 lg:mx-5 2xl:mx-10">

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
  </UserLayout>
</template>
