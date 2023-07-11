<template>
  <footer class="footer">
    <div class="container flex">
      <div class="footer__link">2023</div>
      <a target="_blank" href="https://www.infografika.agency/">Сделано в Инфографике</a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.footer {
  color: #052233;
  font-size: 1.11vw;
  line-height: 1.67vw;
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