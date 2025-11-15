<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useContactStore } from './stores/contact';

const contact = useContactStore()

onMounted(() => {
  contact.loadItem()
})

</script>

<template>

  <RouterView />
</template>
