<template>
  <div class="smiski-card">
    <img :src="smiski.picture" />
    <h3>{{ smiski.name }}</h3>
    <p>${{ smiski.price }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  smiski: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.smiski-card {
  text-align: center;
  width: 200px;
  border: 1px solid #12452b;
  background-color: #9fe3a9;
  border-radius: 10px;
  padding: 10px;
}
</style>
