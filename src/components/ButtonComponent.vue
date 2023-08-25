<script setup>

const props = defineProps({
    text: {type: String, default: "Text Here"},
    action: { type: Function, default: () => false}
})
</script>

<template>
<router-link to="#" class="btn" v-on:click="props.action">{{ props.text }}</router-link>
    
</template>

<style>
.btn {
    background: #5222D0;
    color: #fff;
    padding: 8px 24px 8px 24px;
    text-decoration: none;
    border-radius: 8px;
}
</style>