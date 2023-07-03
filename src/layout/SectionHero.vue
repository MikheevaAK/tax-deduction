<template>
  <section class="hero" :class="{ 'hero__bg': bg }">
    <div class="container">
      <div class="hero__wrap flex">
        <div class="hero__left">
          <p class="hero__descr">{{ descr }}</p>
          <h1 class="h1">{{ title }}</h1>
        </div>
        <div class="hero__right">
          <img :src="img" alt="">
        </div>
      </div>
      <a href="#" class="hero__link" @click.prevent="scrollToMain()">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.12 35.952L24.708 33.348C26.108 33.516 27.368 34.02 28.516 34.86C29.664 35.7 30.392 36.68 30.728 37.8V22.4H32.912V37.8C33.248 36.68 33.976 35.7 35.096 34.86C36.244 34.02 37.504 33.516 38.932 33.348L39.492 35.952C35.544 36.148 33.22 38.5 32.912 42H30.728C30.42 38.5 28.068 36.148 24.12 35.952Z"
            fill="white" />
          <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="white" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    descr: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    bg: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    scroll() {
      const el = document.getElementById('main');
      const y = el.getBoundingClientRect().top + window.screenY - 50;

      window.scrollTo({ top: y, behavior: 'smooth' });
    },
    scrollToMain() {
      this.scroll()
    }
  }
}
</script>

<style>
.hero__bg {
  background: linear-gradient(135deg, #5BADDE 0%, #358FC5 100%);
}
</style>