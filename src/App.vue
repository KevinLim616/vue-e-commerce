<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="p-[50px]">
    <nav class="flex justify-between items-center">
      <div class="flex gap-x-5 text-lg items-center">
        <RouterLink to="/">
          <img
            src="./assets/images/logo06@2x-free-img.png"
            alt="logo"
            width="182"
            height="36"
            class="cursor-pointer"
          />
        </RouterLink>
        <RouterLink to="/products">All Product</RouterLink>
        <RouterLink to="/about">Sofa</RouterLink>
        <RouterLink to="/about">Chair</RouterLink>
        <RouterLink to="/about">Table</RouterLink>
      </div>
      <div class="flex gap-x-4 text-lg">
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/about">My Account</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView class="p-[80px]" />
</template>
