<template>
    <footer class="footer" :class="{'text-bg': activeRoute($route.name)}">
      <div class="container flex">
        <div class="footer__link">2023</div>
        <a href="https://www.infografika.agency/">Сделано в Инфографике</a>
      </div>
    </footer>
</template>

<script>
export default {
  methods: {
    activeRoute(route) {
      if (route === 'main') {
        return true
      }
    }
  }
}
</script>

<style>
.footer.text-bg {
    color: #fff;
    background-color: #5BADDE;
}
</style>