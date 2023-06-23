<script setup>
import { reactive } from 'vue'
const state = reactive({ tab: 'info' })
</script>

<template>
  <!-- <div class="alert alert-warning m-3" role="alert">uid : {{ $route.params.uid }}<br>state.tab : {{ state.tab }}</div> -->
  <div class="mt-5 container">
    <h2>南川 彩華</h2>
    <p>UID: yasudanosuke</p>
    <div class="sns">
      <a href="#"></a>
      <a href="#"><img src="/assets/icon/telephone.png" alt="電話" width="40" height="40"></a>
      <a href="#"><img src="/assets/icon/mail.png" alt="Eメール" width="40" height="40"></a>
      <a href="#"><img src="/assets/icon/twitter.svg" alt="Twitter" width="40" height="40"></a>
      <a href="#"><img src="/assets/icon/instagram.svg" alt="Instagram" width="40" height="40"></a>
      <a href="#"><img src="/assets/icon/facebook.svg" alt="Facebook" width="40" height="40"></a>
      <a href="#"><img src="/assets/icon/line.svg" alt="LINE" width="40" height="40"></a>
      <a href="#"><img src="/assets/icon/youtube.svg" alt="YouTube" width="40" height="40"></a>
    </div>
    <p>よろしくお願いします<br><br>主に東区でたまねぎを食べています</p>
    <ul class="nav nav-pills mb-3">
      <li class="nav-item"><a href="javascript:void(0)" @click="state.tab='info'" class="nav-link" v-bind:class="{'active': state.tab == 'info'}">プロフィール</a></li>
      <!-- <li class="nav-item"><a href="javascript:void(0)" @click="state.tab='report'" class="nav-link" v-bind:class="{'active': state.tab == 'report'}">過去の声</a></li> -->
      <li class="nav-item"><a href="javascript:void(0)" @click="state.tab='feed'" class="nav-link" v-bind:class="{'active': state.tab == 'feed'}">過去の投稿</a></li>
      <!-- <li class="nav-item"><a href="javascript:void(0)" @click="state.tab='vto'" class="nav-link" v-bind:class="{'active': state.tab == 'vto'}">ボランディア募集</a></li> -->
    </ul>
    <div v-if="state.tab === 'info'">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td>登録</td>
            <td>2021年3月に登録</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="state.tab === 'report'">
      
    </div>
    <div v-else-if="state.tab === 'feed'">
      <div class="dropdown">
        <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          絞り込み
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">すべて表示</a></li>
          <li><a class="dropdown-item" href="#">ボランティア</a></li>
          <li><a class="dropdown-item" href="#">参加者</a></li>
        </ul>
      </div>
      <div class="card rounded p-3 mx-auto m-4 border-2 border-secondary _reports">
        <h3>おにぎり食堂にお邪魔しました！</h3>
        <p class="text-end text-secondary">2022/11/17 23:41</p>
        <p>
          初めて来たのですが、和気藹々とした雰囲気で、<br>
          小学1年生の子供も楽しんで食べていました！
        </p>
        <div id="carouselExample2" class="carousel slide mx-auto" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="スライド 1"></button>
            <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="1" aria-label="スライド 2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img class="image" src="/assets/img/report/01.jpg">
            </div>
            <div class="carousel-item active">
              <img class="image" src="/assets/img/report/02.jpg">
            </div>
          </div>
          <button type="button" class="carousel-control-prev" data-bs-target="#carouselExample2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">前へ</span>
          </button>
          <button type="button" class="carousel-control-next" data-bs-target="#carouselExample2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">次へ</span>
          </button>
        </div>
      </div>
    </div>
    <div v-else-if="state.tab === 'vto'">
      <p>ボランティアの人が２人ぐらい足りていません！<br>
        食材の受け入れについては要相談でお願いします<br>
        お米や玉ねぎなどの日持ちする食材はありがたいです❗❗❗❗
      </p>
    </div>
  </div>
</template>
<style scoped>
.sns img {
  margin: 0 .3em;
}
.carousel {
  max-width: 600px;
}
.carousel .image {
  width: 100%;
}

table tr td:nth-of-type(1) {
    width: 90px;
}
table tr th {
    width: 50px;
}
._reports {
  max-width: 800px;
}
</style>