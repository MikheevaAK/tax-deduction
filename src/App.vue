<template>
  <div class="wrapper">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>

import AppHeader from '@/layout/AppHeader';
import AppFooter from '@/layout/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style></style>
