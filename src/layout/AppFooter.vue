<template>
  <footer class="footer" :class="{ 'text-bg': activeRoute($route.name) }">
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
.footer {
  color: #052233;
  font-size: 1.11vw;
  line-height: 1.67vw;
}

.footer.text-bg {
  color: #fff;
  background-color: #5BADDE;
}

.footer .container {
  padding: 5.56vw 8.33vw 2.78vw 8.33vw;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .footer {
    font-size: 4.27vw;
    line-height: 6.40vw;
  }

  .footer .container {
    padding: 10.67vw 4.27vw;
  }
}
</style>