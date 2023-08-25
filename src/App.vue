<script setup>
import HomeView from './views/HomeView.vue';
import TheNavBar from './components/TheNavBar.vue';
</script>

<template>
   <TheNavBar />
   <router-view></router-view>
</template>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600;700&display=swap');

</style>
