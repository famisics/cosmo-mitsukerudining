<template>
  <nav class="navbar d-md-none bg-body-tertiary fixed-bottom">
    <div class="container-fluid d-flex justify-content-around">
      <router-link class="nav-link" to="/">
        <i class="material-symbols-rounded">Home</i>
        ホーム
      </router-link>
      <router-link class="nav-link" to="/chat">
        <i class="material-symbols-rounded">Sms</i>
        チャット
      </router-link>
      <router-link class="nav-link" to="/find">
        <i class="material-symbols-rounded">Search</i>
        みつける
      </router-link>
      <router-link class="nav-link" to="/fav">
        <i class="material-symbols-rounded">Favorite</i>
        お気に入り
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
  .material-symbols-rounded {
    font-size: 30px
  }
  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--bs-body-color);
    width: 25%;
    font-size: 13px;
    transition: .1s;
  }
  nav a.router-link-exact-active {
    transform: scale(1.2);
    transition: .1s;
  }
</style>