<script setup>
import { reactive } from 'vue'
const state = reactive({ tab: 'info',feed: 'all',fav: false })
</script>

<template>
  <!-- <div class="alert alert-warning m-3" role="alert">sid : {{ $route.params.sid }}<br>state.tab : {{ state.tab }}</div> -->
  <div class="head-cover d-md-none">　</div>
  <div class="mt-5 container">
    <div class="basic">
      <div class="overview">
        <h2>おにぎり食堂 <i class="material-symbols-rounded" style="font-size: 1.2em; transform: translateY(7px); cursor: pointer; user-select: none;" :class="{'fill heart': state.fav}" @click="state.fav = !state.fav">favorite_border</i></h2>
        <p>SID: onigiri_lover</p>
        <div class="sns">
          <a href="#"></a>
          <a href="#"><img src="/src/assets/icon/telephone.png" alt="電話" width="40" height="40"></a>
          <a href="#"><img src="/src/assets/icon/mail.png" alt="Eメール" width="40" height="40"></a>
          <a href="#"><img src="/src/assets/icon/twitter.svg" alt="Twitter" width="40" height="40"></a>
          <a href="#"><img src="/src/assets/icon/instagram.svg" alt="Instagram" width="40" height="40"></a>
          <a href="#"><img src="/src/assets/icon/facebook.svg" alt="Facebook" width="40" height="40"></a>
          <a href="#"><img src="/src/assets/icon/line.svg" alt="LINE" width="40" height="40"></a>
          <a href="#"><img src="/src/assets/icon/youtube.svg" alt="YouTube" width="40" height="40"></a>
        </div>
        <p>おにぎりを作ります</p>
        <ul class="nav nav-pills mb-3">
          <li class="nav-item"><a href="javascript:void(0)" @click="state.tab='info'" class="nav-link" v-bind:class="{'active': state.tab == 'info'}">概要</a></li>
          <li class="nav-item"><a href="javascript:void(0)" @click="state.tab='report'" class="nav-link" v-bind:class="{'active': state.tab == 'report'}">レポート</a></li>
          <li class="nav-item"><a href="javascript:void(0)" @click="state.tab='feed'" class="nav-link" v-bind:class="{'active': state.tab == 'feed'}">みんなの声</a></li>
          <li class="nav-item"><a href="javascript:void(0)" @click="state.tab='vto'" class="nav-link" v-bind:class="{'active': state.tab == 'vto'}">募集中</a></li>
        </ul>
      </div>
      <div class="facade d-none d-md-block">　</div>
    </div>
    <div v-if="state.tab === 'info'">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td>住所</td>
            <td>北海道 札幌市北区 北61条西41丁目 3-35</td>
          </tr>
          <tr>
            <td>特徴</td>
            <td>そば屋〇〇という建物です</td>
          </tr>
          <tr>
            <td>アクセス</td>
            <td>〇〇駅から徒歩何分、スーパー〇〇の近く</td>
          </tr>
          <tr>
            <td>開催日時</td>
            <td>毎週水曜日 17:30 - 19:00</td>
          </tr>
          <tr>
            <td>席数目安</td>
            <td><span>15</span> 席</td>
          </tr>
          <tr>
            <td>駐車場</td>
            <td>近くにコインパーキングあり</td>
          </tr>
          <tr>
            <td>スタッフ数</td>
            <td>10 - 70代 8人</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="state.tab === 'report'">
      <div class="card rounded p-3 mx-auto m-4 border-2 border-secondary _reports">
        <h3>2022/06/19</h3>
        <p class="text-end m-0">おにぎり食堂</p>
        <p class="text-end text-secondary">2022/06/19 23:41</p>
        <p>
          今日は初めて来て下さった方が多く、いつもに増して和気藹々としていました！<br>
          是非またいらっしゃってください！<br>
          <br>
          次回の開催は22日水曜日を予定しています！
        </p>
        <div id="carouselExampleIndicators" class="carousel slide mx-auto" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="スライド 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="スライド 2"></button>
          </div>
            <div class="carousel-inner">
              <div class="carousel-item">
                <img class="image" src="/src/assets/demo/images/01.jpg">
              </div>
              <div class="carousel-item active">
                <img class="image" src="/src/assets/demo/images/02.jpg">
              </div>
            </div>
          <button type="button" class="carousel-control-prev" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">前へ</span>
          </button>
          <button type="button" class="carousel-control-next" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">次へ</span>
          </button>
        </div>
      </div>
      <!-- <div class="card rounded p-3 mx-auto m-4 border-2 border-secondary _reports">
        <h3>今日の楽しい玉ねぎ日記 #1345</h3>
        <p class="text-end m-0">玉ねぎ推しの助@玉ねぎ食堂</p>
        <p class="text-end text-secondary">2022/02/17 23:41</p>
        <p>
          今日の玉ねぎ日記では今週の玉ねぎを使った料理についてご紹介します！<br>
          私達が玉ねぎに極力気をつけていることは当然として、<br>
          今日は玉ねぎを使った流しそうめんにチャレンジしました！<br>
          <br>
          竹のように細く切ったタマネギの上をそうめんが流れる様はまさに壮観で<br>
          ４０年来玉ねぎ一筋生きてきてよかった、！と強く思えるような作品となりました。<br>
          <br>
          みなさまも休みの日などにぜひお試しください！
        </p>
        <div id="carouselExampleIndicators" class="carousel slide mx-auto" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="スライド 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="スライド 2"></button>
          </div>
            <div class="carousel-inner">
              <div class="carousel-item">
                <img class="image" src="/src/assets/demo/images/01.jpg">
              </div>
              <div class="carousel-item active">
                <img class="image" src="/src/assets/demo/images/02.jpg">
              </div>
            </div>
          <button type="button" class="carousel-control-prev" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">前へ</span>
          </button>
          <button type="button" class="carousel-control-next" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">次へ</span>
          </button>
        </div>
      </div> -->
    </div>
    <div v-else-if="state.tab === 'feed'">
      <div class="dropdown">
        <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <span v-if="state.feed === 'all'">すべて表示</span>
          <span v-if="state.feed === 'vto'">ボランティア</span>
          <span v-if="state.feed === 'ptc'">参加者</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" @click="state.feed='all'">すべて表示</a></li>
          <li><a class="dropdown-item" href="#" @click="state.feed='vto'">ボランティア</a></li>
          <li><a class="dropdown-item" href="#" @click="state.feed='ptc'">参加者</a></li>
        </ul>
      </div>
      <div v-if="state.feed === 'all'||state.feed === 'vto'">
        <div class="card rounded p-3 mx-auto m-4 border-2 border-secondary _reports">
          <h3>初ボランティアで感じたこと</h3>
          <p class="text-end m-0">さやか <span class="badge bg-success" style="transform: translateY(-2px);">ボランティア</span><span class="text-secondary"> - 30代前半/女性</span></p>
          <p class="text-end text-secondary">2022/10/04 19:20</p>
          <p>
            今回配膳のボランティアに参加させていただきました。私は初めてのお手伝いでしたが、分からないことは都度教えていただけたので、戸惑うことはありませんでした。食堂の皆さんはとても暖かく、積極的に話しかけてくださるので、私も楽しんで活動できました。<br>
            ボランティアの方々の年齢層は広く、運営の主体は主婦の皆さまでしたが、お仕事を引退された方や大学生の方もいらっしゃいました。<br>
            地域とのつながりを感じられた、とても良い体験でした。ぜひ、またお手伝いさせていただきたいと思います。
          </p>
          <div id="carouselExample1" class="carousel slide mx-auto" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExample1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="スライド 1"></button>
              <button type="button" data-bs-target="#carouselExample1" data-bs-slide-to="1" aria-label="スライド 2"></button>
              <button type="button" data-bs-target="#carouselExample1" data-bs-slide-to="2" aria-label="スライド 2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="image" src="/src/assets/demo/images/03.jpg">
              </div>
              <div class="carousel-item">
                <img class="image" src="/src/assets/demo/images/04.jpg">
              </div>
              <div class="carousel-item">
                <img class="image" src="/src/assets/demo/images/05.jpg">
              </div>
            </div>
            <button type="button" class="carousel-control-prev" data-bs-target="#carouselExample1" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">前へ</span>
            </button>
            <button type="button" class="carousel-control-next" data-bs-target="#carouselExample1" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">次へ</span>
            </button>
          </div>
        </div>
      </div>
      <div v-if="state.feed === 'all'||state.feed === 'ptc'">
        <div class="card rounded p-3 mx-auto m-4 border-2 border-secondary _reports">
          <h3>おにぎり食堂にお邪魔しました！</h3>
          <p class="text-end m-0">さやか <span class="badge bg-info" style="transform: translateY(-2px);">参加者</span><span class="text-secondary"> - 30代前半/女性</span></p>
          <p class="text-end text-secondary">2022/11/17 23:41</p>
          <p>
            初めて来たのですが、和気藹々とした雰囲気で、<br>
            小学1年生の子供も楽しんで食べていました！
          </p>
          <div id="carouselExample2" class="carousel slide mx-auto" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="スライド 1"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="image" src="/src/assets/demo/images/06.jpg">
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
      
      <!-- <div class="card rounded p-3 mx-auto m-4 border-2 border-secondary _reports">
        <h3>玉ねぎ食堂にお邪魔しました！</h3>
        <p class="text-end m-0">アマチュア流しそうめんプレイヤー</p>
        <p class="text-end text-secondary">2022/02/17 23:41</p>
        <p>
          今日の玉ねぎ日記では今週の玉ねぎを使った料理についてご紹介します！<br>
          私達が玉ねぎに極力気をつけていることは当然として、<br>
          今日は玉ねぎを使った流しそうめんにチャレンジしました！<br>
          <br>
          竹のように細く切ったタマネギの上をそうめんが流れる様はまさに壮観で<br>
          ４０年来玉ねぎ一筋生きてきてよかった、！と強く思えるような作品となりました。<br>
          <br>
          みなさまも休みの日などにぜひお試しください！
        </p>
        <div id="carouselExampleIndicators" class="carousel slide mx-auto" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="スライド 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="スライド 2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img class="image" src="/src/assets/demo/images/01.jpg">
            </div>
            <div class="carousel-item active">
              <img class="image" src="/src/assets/demo/images/02.jpg">
            </div>
          </div>
          <button type="button" class="carousel-control-prev" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">前へ</span>
          </button>
          <button type="button" class="carousel-control-next" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">次へ</span>
          </button>
        </div>
      </div> -->
    </div>
    <div v-else-if="state.tab === 'vto'">
      <p>ボランティアの人が２人ぐらい足りていません！<br>
        食材の受け入れについては要相談でお願いします<br>
        お米や玉ねぎなどの日持ちする食材はありがたいです！！
      </p>
    </div>
  </div>
</template>
<style scoped>
.basic {
  display: flex;

}
.basic .overview {
  min-width: 400px;
}
.basic .facade {
  background: url('/src/assets/demo/images/onigiri_lover.jpg') center right no-repeat;
  background-size: contain;
  width: 100%;
}
.head-cover {
  height: 250px;
  margin: 20px;
  background: url('/src/assets/demo/images/onigiri_lover.jpg') center center no-repeat;
  background-size: contain;
}
.sns img {
  margin: 0 .3em;
}
.carousel {
  max-width: 600px;
}
.carousel .image {
  width: 100%;
}
._reports {
  max-width: 800px;
}
.heart {
  transition: .2s;
  color: #ff4444;
}
</style>