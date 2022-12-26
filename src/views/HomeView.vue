<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="p-[50px]">
    <div class="bg-[url(../assets/images/sofa-bg-banner.jpg)] p-[80px]">
      <h1 class="text-5xl font-bold text-mainGreen">
        STYLE<br />COMFORT &<br />
        AFFORDABLE
      </h1>
      <RouterLink
        to="/about"
        class="border-2 border-mainGreen p-[14px] text-mainGreen inline-block my-14 hover:bg-mainGreen transition-colors"
      >
        Explore Store
      </RouterLink>
    </div>
  </main>
</template>
