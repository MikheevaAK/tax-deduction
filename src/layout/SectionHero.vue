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
      const y = el.getBoundingClientRect().top + window.screenY;

      window.scrollBy({ top: y, behavior: 'smooth' });
    },
    scrollToMain() {
      this.scroll()
    }
  }
}
</script>

<style>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #5BADDE;
}

.hero .container {
  padding: 7.986vw 10.486vw 0 8.403vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__wrap {
  margin-bottom: 3.542vw;
  gap: 5.556vw;
  align-items: center;
}

.hero__descr {
  color: #fff;
  margin-bottom: 0.833vw;
}

.hero__left {
  max-width: 42.222vw;
  width: 100%;
}

.hero__right {
  width: 33.333vw;
  height: 33.333vw;
  flex-shrink: 0;
}

.hero__link {
  width: 4.444vw;
  height: 4.444vw;
  display: block;
  text-align: center;
}

.hero__bg {
  background: linear-gradient(135deg, #5BADDE 0%, #358FC5 100%);
}

@media (max-width: 768px) {
  .hero .container {
    padding: 29.33vw 4.27vw 7.20vw 5.87vw;
  }

  .hero__wrap {
    margin-bottom: 30.93vw;
    gap: 13.33vw;
    flex-direction: column-reverse;
  }

  .hero__descr {
    margin-bottom: 1.60vw;
  }

  .hero__left {
    max-width: unset;
  }

  .hero__right {
    width: 74.67vw;
    height: 74.67vw;
  }

  .hero__link {
    width: 17.07vw;
    height: 17.07vw;
  }
}
</style>