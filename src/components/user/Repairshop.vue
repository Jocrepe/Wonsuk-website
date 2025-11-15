<script setup>
import { defineProps } from 'vue';

defineProps({
  repairshops: Array,
  addToContact: Function
})
</script>

<template>
  <div class="grid grid-cols-3 mb-15 gap-10">
    <div v-for="i in repairshops" class="card bg-info-content w-full rounded-3xl shadow-md">
      <figure class="px-10 pt-10 pb-5">
        <img :src="i.imageUrl" alt="" class="w-full h-90" />
      </figure>
      <div class="card-body ">
        <h2 class="card-title text-2xl">
          <p>{{ i.name }}</p>
        </h2>
        <div class="flex">
          <p class="text-xl">Review : {{ i.reviewscore }} / 5.0</p>
          <img src="@/assets/icon/star.png" alt="" class="w-5 h-5 mr-66">
        </div>
        <p class="text-xl">{{ i.about }}</p>
        <p class="text-xl">open : {{ i.open }}</p>
        <div class="flex card-actions justify-center">
          <RouterLink to="/contact">
            <button class="btn btn-success w-75 h-15 text-xl mt-5 mb-5" @click="addToContact(i)">
              <p>ติดต่อ</p>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

  </div>
</template>
