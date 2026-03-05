<template>
  <div class="container">
    <h1>Ice Cream DIY Store</h1>

    <Hi v-for="icecream in icecreams" :key="icecream.name" :icecream="icecream">
      <button @click="addToCart(icecream)">Add to Cart</button>
    </Hi>

    <ul>
      <li v-for="item in bought" :key="item.name">
        {{ item.name }} - ${{ item.price }} <button @click="Deleteicecream()">remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Hi from '@/components/hi.vue'

const bought = ref([])

function addToCart(icecream) {
  bought.value.push(icecream)
  console.log(`${icecream.name} - $${cecrea.price}`)
}

const icecreams = ref([
  { name: 'Vanilla', type: 'flavor', picture: 'vanilla.png', price: 3.99 },
  { name: 'Chocolate', type: 'flavor', picture: 'chocolate.png', price: 4.99 },
  { name: 'Strawberry', type: 'flavor', picture: 'strawberry.png', price: 4.49 },
  { name: 'Chocolate Mint Chip', type: 'flavor', picture: 'chocolatemintchip.png', price: 5.49 },
  { name: 'Cookies n Cream', type: 'flavor', picture: 'cookiesncream.png', price: 4.99 },
  { name: 'Rocky Road', type: 'flavor', picture: 'rockyroad.png', price: 5.99 },
  { name: 'Mocha', type: 'flavor', picture: 'mocha.png', price: 5.49 },
  { name: 'Coffee', type: 'flavor', picture: 'coffee.png', price: 4.49 },
  {
    name: 'Chocolate Chip Cookie',
    type: 'flavor',
    picture: 'chocolatechipcookie.png',
    price: 7.99,
  },
  { name: 'Cake Cone', type: 'container', picture: 'cakecone.png', price: 5.99 },
  { name: 'Sugar Cone', type: 'container', picture: 'sugarcone.png', price: 5.49 },
])
</script>

<style scoped></style>
