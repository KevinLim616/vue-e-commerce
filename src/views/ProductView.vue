<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
const route = useRoute();
const product = ref<Product | null>(null);
const { id } = route.params;
const getData = async () => {
  await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((result) => {
      product.value = result;
    });
  console.log(product.value);
};

getData();
</script>
<template>
  <main>
    <div class="flex">
      <img :src="product?.image" :alt="product?.title" width="300" />
      <div>
        <h1 class="font-bold text-3xl">{{ product?.title }}</h1>
      </div>
    </div>
  </main>
</template>
