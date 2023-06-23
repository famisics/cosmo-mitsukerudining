<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a class="container p-4 border rounded _card text-decoration-none" href="/sid/onigiri_lover">
    <div class="d-flex _username">
      <img src="../assets/demo/uid/icondemo.jpg">
      <div>
        <h3>おにぎり食堂</h3>
        <p>北海道 札幌市北区 北61条西41丁目 3-35</p>
      </div>
    </div>
    <p>おにぎりを作ります</p>
  </a>
</template>

<style scoped>
._username img {
  width: 4em;
  height: 4em;
  border-radius: .5em;
  margin-right: .7em;
}
._card {
  width: calc(50% - 20px);
  margin: 10px;
}
@media (max-width: 992px) {
  ._card {
    margin: .6em 0;
    width: 100%;
  }
}
._card:hover {
  background: var(--bs-secondary-bg);
}
</style>
