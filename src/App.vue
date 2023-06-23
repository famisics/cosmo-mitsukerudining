<script setup>
import { RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
import BottomNav from './components/BottomNav.vue'
</script>

<template>
  <TopNav />
  <main>
    <RouterView />
  </main>
  <BottomNav />
</template>