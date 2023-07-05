<template>
  <header class="header">
    <div class="container flex">
      <a target="_blank" href="https://www.infografika.agency/" class="header__link">ИНФОГРАФИКА</a>
      <router-link :to="{ name: 'main' }" class="header__link_none graph-text">
        На главную
      </router-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #052233;
  font-size: 1.11vw;
  line-height: 1.67vw;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(2px);
  z-index: 10;
}

.header .container {
  padding: 1.11vw 1.53vw 0.56vw 1.67vw;
  justify-content: space-between;
  align-items: center;
}

.header__link {
  margin-right: auto;
}

@media (max-width: 768px) {
  .header {
    position: static;
    font-size: 3.73vw;
    line-height: 5.33vw;
  }

  .header .container {
    padding: 4vw 4.27vw 3.47vw 4.27vw;
  }

  .header__link_none {
    display: none;
  }
}
</style>