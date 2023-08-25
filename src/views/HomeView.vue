<script setup>
import ButtonComponent from '../components/ButtonComponent.vue';

</script>

<template>
  <div class="hero-section">
    <div class="left-content">
      <h1>Manage your tasks effectively</h1>
      <p>Modern todo list application to help you track your activities and stay productive.</p>
      <ButtonComponent :action="() => $router.push({ name: 'todo'})" text="Get Started"/>
    </div>
    <div class="right_content">
      <img src="../assets/hero-illustration.png" alt="alt-image">
    </div>
  </div>
</template>


<style>
.hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}
.left-content p{
  margin-top: 12px;
  margin-bottom: 24px;
}
.left-content h1{
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.2px;
  word-wrap: break-word;
}
</style>