<script setup>

</script>

<template>
<div class="nav-wrapper">
  <div class="nav-content">
    <h1>ToDoApp</h1>
    <div class="navigations">
      <ul class="list-wrap">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'todo' }">Todos</router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>


<style scoped>

.nav-wrapper {
  margin-bottom: 60px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  filter: drop-shadow(0px 8px 32px rgba(0, 0, 0, 0.05));
}
.nav-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-content h1{
  font-size: 16px;
  font-weight: 600;
  
}

.list-wrap {
  display: flex;
  justify-content: space-evenly;
}

.nav-item {
  margin: 20px;
  list-style: none;
  color: black;
}

a {
  text-decoration: none;
}
</style>
