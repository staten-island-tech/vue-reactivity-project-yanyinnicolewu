<template>
  <div class="container"></div>
  <h1>Ice Cream DIY store</h1>
  <img src="chocolate.png" alt="" />
</template>

<script setup>
import { ref } from 'vue'
const iceCreamMenu = ref([
  { flavor: 'Vanilla', price: 3.99 },
  { flavor: 'Chocolate', price: 4.99 },
  { flavor: 'Strawberry', price: 4.49 },
  { flavor: 'Mint Chocolate Chip', price: 5.49 },
  { flavor: 'Cookies and Cream', price: 4.99 },
  { flavor: 'Rocky Road', price: 5.99 },
  { flavor: 'Butter Pecan', price: 5.49 },
  { flavor: 'Coffee', price: 4.49 },
  { flavor: 'Pistachio', price: 5.99 },
  { flavor: 'Cookie Dough', price: 5.49 },
  { flavor: 'Neapolitan', price: 2.97 },
  { flavor: 'Chocolate Fudge Brownie', price: 7.99 },
])
</script>

<style lang="scss" scoped></style>
