<script setup lang="ts">
import { useFetch } from "../composable/fetch";
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const productList = ref<Product[]>([]);
async function getData() {
  return fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json())
    .then((result) => {
      productList.value = result;
    });
}
getData();
</script>

<template>
  <div class="flex gap-4 justify-center">
    <RouterLink
      v-for="product in productList"
      :key="product.id"
      :to="`/product/${product.id}`"
    >
      <div>
        <img :src="product.image" :alt="product.title" width="150" />
      </div>
      <h2>{{ product.title }}</h2>
      <h3>{{ product.price }}</h3>
    </RouterLink>
  </div>
</template>
