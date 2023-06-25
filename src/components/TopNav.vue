<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold" to="/">
        <!-- <img src="@/assets/eating.svg" width="30" height="24" class="d-inline-block align-text-top header-icon"> -->
        みつけるダイニング<p class="alpha">CLOSED ALPHA (DEMO)</p>
      </router-link>
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".nav_mobile" aria-controls="nav_mobile" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="collapse navbar-collapse nav_mobile">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/find"><i class="material-symbols-rounded">Search</i><span>食堂を探す</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/chat"><i class="material-symbols-rounded">Sms</i><span>チャット</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/fav"><i class="material-symbols-rounded">Favorite</i><span>お気に入り</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-none d-lg-flex" to="/about"><i class="material-symbols-rounded">Info</i><span>About</span></router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              その他
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/about">みつけるダイニングについて</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/about#release">リリースノート</router-link></li>
            </ul>
          </li> -->
        </ul>
        <div class="d-none d-lg-flex">
          <router-link class="btn btn-outline-warning border-2 mx-2 pt-2" to="/login">ログイン</router-link>
        </div>
      </div>
      <div class="d-flex">
        <router-link class="btn btn-outline-warning border-2 mx-2 pt-2" to="/reg">新規登録</router-link>
        <router-link class="iconset" to="/uid/yasudanosuke"><i class="material-symbols-rounded icon fill">account_circle</i></router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.iconset {
  height: 40px;
}
.icon {
  font-size: 40px;
}
nav a.router-link-exact-active {
  color: var(--bs-emphasis-color);
}
.nav-item a {
  display: flex;
}
.nav-item a.router-link-exact-active .material-symbols-rounded {
  color: var(--bs-emphasis-color);
}
.nav-item a span {
  margin-left: 5px;
}
.alpha {
  margin-top: 3px;
  font-size: 11px;
  line-height: 0;
  text-align: right;
  font-weight: normal;
  letter-spacing: .5px;
}
.navbar-brand {
  padding: 0;
  height: 40px;
}
</style>