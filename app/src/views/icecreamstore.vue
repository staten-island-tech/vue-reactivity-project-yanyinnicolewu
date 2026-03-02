<template>
  <div class="container">
    <h1>Ice Cream DIY Store</h1>
    <div v-for="item in icecreams" :key="item.flavor || item.Container" class="card">
      <h2>{{ item.flavor || item.Container }}</h2>
      <img :src="item.picture" alt="" />
      <p>${{ item.price }}</p>
    </div>
  </div>
</template>

<script setup>
const icecreams = [
  { flavor: 'Vanilla', picture: 'vanilla.png', price: 3.99 },
  { flavor: 'Chocolate', picture: 'chocolate.png', price: 4.99 },
  { flavor: 'Strawberry', picture: 'strawberry.png', price: 4.49 },
  { flavor: 'Chocolate Mint Chip', picture: 'chocolatemintchip.png', price: 5.49 },
  { flavor: 'Cookies n Cream', picture: 'cookiesncream.png', price: 4.99 },
  { flavor: 'Rocky Road', picture: 'rockyroad.png', price: 5.99 },
  { flavor: 'Mocha', picture: 'mocha.png', price: 5.49 },
  { flavor: 'Coffee', picture: 'coffee.png', price: 4.49 },
  { flavor: 'Chocolate Chip Cookie', picture: 'chocolatechipcookie.png', price: 7.99 },
  { Container: 'Cake Cone', picture: 'cakecone.png', price: 5.99 },
  { Container: 'Sugar Cone', picture: 'sugarcone.png', price: 5.49 },
  { Container: 'Cup', picture: 'cup1.png', price: 2.97 },
]
</script>

<style scoped></style>
