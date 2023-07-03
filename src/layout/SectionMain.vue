<template>
    <section id="main" class="main" :class="{
        'text-white': textColor,
        'bg': bg
    }">
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        textColor: {
            type: Boolean,
            default: false
        },
        bg: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.main {
    padding-top: 6.25vw;
    padding-bottom: 8.33vw;
}

.main .container {
    padding: 0 19.097vw;
}

.step-4 .main .container {
    padding: 0 16.53vw;
}

.bg {
    background-color: #5BADDE;
}

@media (max-width: 768px) {
    .main {
        padding-top: 6.67vw;
        padding-bottom: 21.33vw;
    }

    .main .container,
    .step-4 .main .container {
        padding: 0;
    }
}
</style>