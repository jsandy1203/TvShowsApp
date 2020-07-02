<template>
  <div class="row">
    <Header/>
    <div class="container mt-4">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
    
  }
}
</script>

<style>
@import 'App.css';
</style>
