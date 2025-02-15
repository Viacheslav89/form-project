<template>
  <div class="main">
    <v-layout>
      <AppNavigationDrawers />
      <v-main style="min-height: 1500px">
        <AppMain />
      </v-main>
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import AppNavigationDrawers from "@/components/navigation/AppNavigationDrawers.vue";
import AppMain from "@/components/layout/AppMain.vue";

</script>

<style setup lang="scss">
.main {
  min-height: 1200px;
}
</style>
