<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="_bg">　</div>
  <div class="_upper container blank">
    <h1 class="fw-normal">{{ text }}</h1>
    <p class="text-secondary-emphasis">このページはまだ作成されていません</p>
    <p class="text-muted mt-5">2023 © みつけるダイニング</p>
  </div>
</template>

<style scoped>
._bg {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: url('../assets/demo/uid/P1080681.JPG') center center;
  background-size: cover;
  background-color: #21252984;
  background-blend-mode: darken;
  filter: blur(20px);
  z-index: -20;
}
._upper {
  position: fixed;
  z-index: -10;
}
h1 {
  margin-top: 100px;
}
.blank {
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
