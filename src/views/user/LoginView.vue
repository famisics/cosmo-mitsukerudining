<template>
  <div class="bg text-center">
    <div class="form-signin">
      <form>
        <img class="mb-4" src="@/assets/demo/logo.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">ログイン</h1>
    
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email アドレス <span class="text-secondary">/</span> ユーザーID</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">パスワード</label>
        </div>
    
        <!-- <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> 記憶しておく
          </label>
        </div> -->
        <div class="mb-3">
          <label>
            または <router-link to="/reg">新規登録</router-link>
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">ログイン</button>
        <p class="mt-5 mb-3 text-muted">2023 &copy; みつけるダイニング</p>
      </form>
    </div>
  </div>
</template>
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
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>