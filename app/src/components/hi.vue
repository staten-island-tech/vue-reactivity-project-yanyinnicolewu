<template>
  <div>
    <h2>{{ icecream.name }}</h2>
    <h3>{{ icecream.prices }}</h3>
    <img :src="icecream.img" alt="" />
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  icecream: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 200px;
  border: 3px solid black;
}
</style>
