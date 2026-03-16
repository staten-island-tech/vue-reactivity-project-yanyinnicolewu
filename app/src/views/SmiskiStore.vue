<template>
  <div class="storetitle">Smiski Store</div>
  <div class="container">
    <smiskibuy v-for="smiski in smiskis" :key="smiski.name" :smiski="smiski">
      <button @click="addToCart(smiski)">Add to Ur Cart</button>
    </smiskibuy>

    <!-- <p>Total: ${{ total }}</p> -->
  </div>
  <div class="urcart">
    <h2>Your Cart</h2>
    <p>Total: ${{ total.toFixed(2) }}</p>
    <ul>
      <li v-for="item in bought" :key="item.name">
        {{ item.name }}: ${{ item.price }} <button @click="deleteItem(item)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import smiskibuy from '@/components/smiski-buy.vue'

const bought = ref([])
const total = ref(0)

function addToCart(smiski) {
  bought.value.push(smiski)
  console.log(`${smiski.name}: $${smiski.price}`)
  total.value += smiski.price
}

function deleteItem(item) {
  bought.value = bought.value.filter((smiski) => smiski !== item)

  let sum = 0
  bought.value.forEach((smiski) => {
    sum -= smiski.price
  })
  total.value = sum
}

const smiskis = ref([
  { name: 'SMISKI Giving a Bouquet', picture: 'img_birthday01.png', price: 12.99 },
  { name: 'SMISKI Wrapped Up', picture: 'img_birthday02.png', price: 12.99 },
  { name: 'SMISKI Popping Confetti', picture: 'img_birthday03.png', price: 12.99 },
  { name: 'SMISKI Birthday Message', picture: 'img_birthday04.png', price: 12.99 },
  { name: 'Little SMISKI Decorating', picture: 'img_birthday05.png', price: 12.99 },
  { name: 'SMISKI Tasting', picture: 'img_birthday06.png', price: 12.99 },
  { name: 'SMISKI Blowing Bubbles', picture: 'img_product_sunday01.png', price: 12.99 },
  { name: 'SMISKI Paper Airplane', picture: 'img_product_sunday02.png', price: 12.99 },
  { name: 'SMISKI Sunbathing', picture: 'img_product_sunday03.png', price: 12.99 },
  { name: 'SMISKI Sing-Along', picture: 'img_product_sunday04.png', price: 12.99 },
  { name: 'SMISKI Skateboarding', picture: 'img_product_sunday05.png', price: 12.99 },
  { name: 'SMISKI Gardening', picture: 'img_product_sunday06.png', price: 12.99 },
  { name: 'SMISKI Carrying Ladder', picture: 'img_moving01.png', price: 12.99 },
  { name: 'SMISKI Balancing Boxes', picture: 'img_moving02.png', price: 12.99 },
  { name: 'SMISKI Decorating', picture: 'img_moving03.png', price: 12.99 },
  { name: 'Little SMISKI Teamwork', picture: 'img_moving04.png', price: 12.99 },
  { name: 'Green Thumb SMISKI', picture: 'img_moving05.png', price: 12.99 },
  { name: 'SMISKI Falling Down', picture: 'img_moving06.png', price: 12.99 },
])
</script>

<style scoped>
button {
  margin-top: 8px;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid #12452b;
  background-color: #23a136;
  color: black;
}

.container {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.urcart {
  margin-top: 8px;
  border: 2px solid black;
  padding: 20px;
  height: fit-content;
}

.storetitle {
  color: rgb(5, 53, 6);
  padding: 20px;
  text-align: center;
  font-size: 100px;
}
</style>
