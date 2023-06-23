<script setup>
import DiningCard from '../../components/DiningCard.vue'
</script>
<template>
  <div class="mt-5 container">
    <h2 class="mb-4">子ども食堂を探す</h2>
    <div class="search m-4 mb-5">
      <form>
        <div class="row mb-3">
          <label for="inputKeyword" class="col-sm-2 col-form-label">ワード検索</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputKeyword" placeholder="食堂名 / スタッフ / 地域 などから検索">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputHoge" class="col-sm-2 col-form-label">エリア</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputHoge" value="指定方法を検討">
          </div>
        </div>
        <!-- <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0">ラジオボタン</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input type="radio" class="form-check-input" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label for="gridRadios1" class="form-check-label">
                近所の食堂に限定する
              </label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" name="gridRadios" id="gridRadios2" value="option2">
              <label for="gridRadios2" class="form-check-label">
                オプション2
              </label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" name="gridRadios" id="gridRadios3" value="option3" disabled>
              <label for="gridRadios3" class="form-check-label">
                オプション3（無効）
              </label>
            </div>
          </div>
        </fieldset> -->
        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-2">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="gridCheck1">
              <label for="gridCheck1" class="form-check-label">
                徒歩で行ける食堂に限定する
              </label>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100">検索</button>
      </form>
    </div>
    <div class="d-flex flex-wrap justify-content-start">
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
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
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