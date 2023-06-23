<script setup>
import DiningCard from '../../components/DiningCard.vue'
</script>
<template>
  <div class="mt-5 container">
    <h2 class="mb-4">お気に入りの子ども食堂</h2>
    <div class="search m-3 mb-4">
      <div class="dropdown">
        <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          絞り込み
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">全て</a></li>
          <li><a class="dropdown-item" href="#">今日開催予定</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">お気に入りグループ1</a></li>
          <li><a class="dropdown-item" href="#">お気に入りグループ2</a></li>
          <li><a class="dropdown-item" href="#">お気に入りグループ3</a></li>
        </ul>
      </div>
    </div>
    <div class="d-flex flex-wrap flex-column flex-lg-row justify-content-start">
      <DiningCard/>
    </div>
    <div class="d-flex justify-content-center m-4">
      <nav>
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">前へ</span>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">次へ</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style scoped>

</style>