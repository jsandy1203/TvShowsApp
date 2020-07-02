<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-custom-2 navbar-light fixed-top" id="main-nav">
    <div class="container">
      <router-link to="/" class="navbar-brand"><i class="fas fa-video"></i>  TvShowApp</router-link>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link"><b>Home</b></router-link>
          </li>
          <li class="nav-item">
            <router-link to='/genrelist' class="nav-link"><b>Genres</b></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .navbar {
  border-bottom: #7F8688 3px transparent;
  opacity: 1;
}

.navbar-nav {
  text-align: center;
}

.bg-custom-2 {
background-image: linear-gradient(50deg, #ff6ec4 0%, #7873f5 100%);
}
</style>