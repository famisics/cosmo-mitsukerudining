<script setup>
import { reactive } from 'vue'
const state = reactive({ started: true })
</script>

<template>
  <div class="bg text-center">
    <div class="form-signin" v-if="state.started">
      <div>
        <img class="mb-4" src="/assets/favicon.ico" alt="" width="72" height="72">
        <h1 class="h3 mb-3 fw-normal">新規登録</h1>
        <div class="mb-3">
          <label>
            みつけるダイニングにアカウントを作成します
          </label>
        </div>
        <div class="mb-3">
          <label>
            すでにアカウントをお持ちの方は、 <router-link to="/login">ログイン</router-link> してください
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary mt-3" @click="state.started = false">続ける</button>
        <p class="mt-5 mb-3 text-muted">2023 &copy; みつけるダイニング</p>
      </div>
    </div>
    <div class="form-signin" v-else>
      <div>
        <img class="mb-4" src="/assets/favicon.ico" alt="" width="72" height="72">
        <h3 class="h3 mb-3 fw-normal">新規登録</h3>
        <form>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="Email アドレス">
            <label for="floatingInput">Email アドレス</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="パスワード">
            <label for="floatingInput">パスワード</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="希望するユーザーID">
            <label for="floatingInput">希望するユーザーID (ここもう少し検討)</label>
          </div>
          <h3 class="h5 fw-normal mt-5 mb-3">ユーザー情報</h3>
          <div class="row">
            <div class="col">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" placeholder="名字 (漢字)">
                <label for="floatingInput">名字 (漢字)</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" placeholder="名前 (漢字)">
                <label for="floatingInput">名前 (漢字)</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" placeholder="名字 (カタカナ)">
                <label for="floatingInput">名字 (カタカナ)</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" placeholder="名前 (カタカナ)">
                <label for="floatingInput">名前 (カタカナ)</label>
              </div>
            </div>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="希望するユーザーID">
            <label for="floatingInput">ニックネーム (任意)</label>
          </div>
          <div class="mb-3">
            <label style="text-algin: center;">性別</label><br>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1">男</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">女</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
              <label class="form-check-label" for="inlineRadio3">その他</label>
            </div>
          </div>
          <select class="form-select form-select-md mb-3" disabled>
            <option selected>北海道</option>
          </select>
          <select class="form-select form-select-md mb-3" disabled>
            <option selected>札幌市</option>
          </select>
          <select class="form-select form-select-md mb-3">
            <option selected>住んでいる区を選択してください</option>
            <option value="s">北区</option>
            <option value="s">東区</option>
            <option value="s">南区</option>
            <option value="s">西区</option>
            <option value="s">中央区</option>
            <option value="s">清田区</option>
            <option value="s">手稲区</option>
            <option value="s">厚別区</option>
            <option value="s">豊平区</option>
            <option value="s">白石区</option>
          </select>
        </form>
        <div class="mb-3">
          <label>
            すでにアカウントをお持ちの方は、<br><router-link to="/login">ログイン</router-link> してください
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary _first_btn mt-3">登録</button>
        <p class="mt-5 mb-3 text-muted">2023 &copy; みつけるダイニング</p>
      </div>
    </div>
  </div>
</template>
<!-- <script>
defineDatas({
  msg: String,
})
</script> -->
<style scoped>
.bg {
  height: calc(100vh - 124px);
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: var(--bs-body-bg);
  display: flex;
  align-items: center;
}
.form-signin {
  width: 100%;
  max-width: 430px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input {
  border-radius: 5px;
}

</style>